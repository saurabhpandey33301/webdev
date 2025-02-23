import axios from "axios";
import { BACKEND_URL } from "../../config";
import {atom, atomFamily, selector, selectorFamily} from "recoil"


export const Editor = atom({
        key : "Editor",
        default  : null
})


export const idd = atom<string> ({
    key : "Content",
    default : ""
})

export const Toggle = atom<boolean>({
    key : "Toggle",
    default : false
})




// Selector Family to Fetch Blogs Dynamically Based on a Parameter
// export const blogsSelectorFamily = selectorFamily({
//     key: "blogsSelectorFamily",
//     get: (filters: Record<string, string>) => async ({get}) => {
//       try {
//         // Convert filters into a query string (optional, based on API structure)
//         const queryParams = new URLSearchParams(filters).toString();
//         const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk?${queryParams}`, {
//           headers: {
//             Authorization: localStorage.getItem("token"),
//           },
//         });
//         return res.data?.blogs || [];
//       } catch (error) {
//         console.error("Failed to fetch blogs", error);
//         throw error; // Allows Recoil to handle errors
//       }
//     },
//   });
  
//   // Atom Family to Store Blogs for Each Request
//   export const blogsAtomFamily = atomFamily({
//     key: "blogsAtomFamily",
//     default: blogsSelectorFamily, // Default fetch function for each query
//   });
  


// 🔹 Selector Family to Fetch Blogs with API Call Cancellation
export const blogsSelectorFamily = selectorFamily({
  key: "blogsSelectorFamily",
  get: (filters: Record<string, string>) => async () => {
    const controller = new AbortController(); // ✅ Create an AbortController
    const { signal } = controller;

    try {
      const queryParams = new URLSearchParams(filters).toString();
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk?${queryParams}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        signal, // ✅ Attach signal to cancel request if needed
      });

      return res.data?.blogs || [];
    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn("API request was canceled"); // ✅ Request was canceled safely
      } else {
        console.error("Failed to fetch blogs", error);
      }
      throw error;
    }
  },
});

// 🔹 Atom Family to Store Blogs for Each Query
export const blogsAtomFamily = atomFamily({
  key: "blogsAtomFamily",
  default: (filters: Record<string, string>) => blogsSelectorFamily(filters), // ✅ Fix applied
});





export const blogSelectorFamily = selectorFamily({
  key: "blogSelectorFamily",
  get: (id: string) => async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      return res.data?.blog || null; // Ensure fallback value
    } catch (error) {
      console.error("Failed to fetch blog", error);
      return null; // Prevents crashes
    }
  },
})



export const blogAtomFamily = atomFamily({
  key: "blogAtomFamily",
  default: blogSelectorFamily, // Default value is fetched from API
});




export const checkSelector = selector({
  key: "checkSelector",
  get: async () => {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/blog/check`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      if (res.status === 200 && res.data?.userId) {
        return { check: true, id: res.data.userId };
      }
      return { check: false, id: "" };
    } catch (error) {
      console.error("Failed to check user", error);
      return { check: false, id: "" }; // Prevents crashes
    }
  },
});



export const checkAtom = atom<boolean>({
  key: "checkAtom",
  default: false,
});

export const idAtom = atom<string>({
  key: "idAtom",
  default: "",
});



export const userAtom = atom<string>({
  key: "userAtom",
  default: "User", // Default username
});

export const userSelector = selector({
  key: "userSelector",
  get: async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return ""; // Handle missing token gracefully

      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/info`,
        {}, // No params needed
        {
          headers: {
            Authorization: token,
          },
        }
      );

      return res.data || ""; // Ensure a fallback value
    } catch (error) {
      console.error("Error fetching user info:", error);
      return ""; // Prevent crashes
    }
  },
});
