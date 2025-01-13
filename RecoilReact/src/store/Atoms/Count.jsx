import {atom, atomFamily, selector, selectorFamily} from 'recoil'
import axios from 'axios';

export const countAtom = atom({
        key: "countAtom",
        default : 0
});

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get})=>{
        const count = get(countAtom);
        return count%2==0;
    } 
});

export const todosAtomFamily = atomFamily({
      key : "todosAtomFamily",
      default : selectorFamily({
        key : "todoSelectorFamily",
        get : (id) => async({get})=>{
            const res = await axios.get(`http://localhost:3000/todos?id=${id}`);
            return res.data.todo
        },
      }),
});


