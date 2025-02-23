// import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';

// // Editor is an uncontrolled React component
// export const Editor = forwardRef(
//   ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
//     const containerRef = useRef(null);
//     const defaultValueRef = useRef(defaultValue);
//     const onTextChangeRef = useRef(onTextChange);
//     const onSelectionChangeRef = useRef(onSelectionChange);

//     useLayoutEffect(() => {
//       onTextChangeRef.current = onTextChange;
//       onSelectionChangeRef.current = onSelectionChange;
//     });

//     useEffect(() => {
//       ref.current?.enable(!readOnly);
//     }, [ref, readOnly]);

//     useEffect(() => {
//       const container = containerRef.current;
//       const editorContainer = container.appendChild(
//         container.ownerDocument.createElement('div'),
//       );
//       const quill = new Quill(editorContainer, {
//         theme: 'snow',
//       });

//       ref.current = quill;

//       if (defaultValueRef.current) {
//         quill.setContents(defaultValueRef.current);
//       }

//       quill.on(Quill.events.TEXT_CHANGE, (...args) => {
//         onTextChangeRef.current?.(...args);
//       });

//       quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
//         onSelectionChangeRef.current?.(...args);
//       });

//       return () => {
//         ref.current = null;
//         container.innerHTML = '';
//       };
//     }, [ref]);

//     return <div ref={containerRef}></div>;
//   },
// );

// Editor.displayName = 'Editor';



// import  { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
// import Quill from 'quill'; // Import Quill
// import 'quill/dist/quill.snow.css'; // Import Quill CSS

// // Define props type
// interface EditorProps {
//   readOnly?: boolean;
//   defaultValue?: any; // Use proper Delta type if available from Quill
//   onTextChange?: (delta: any, oldDelta: any, source: string) => void;
//   onSelectionChange?: (range: any, oldRange: any, source: string) => void;
// }

// // ForwardRef type
// export const Editor = forwardRef<Quill | null, EditorProps>(
//   ({ readOnly = false, defaultValue, onTextChange, onSelectionChange }, ref) => {
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const defaultValueRef = useRef(defaultValue);
//     const onTextChangeRef = useRef(onTextChange);
//     const onSelectionChangeRef = useRef(onSelectionChange);

//     // Sync function refs to prevent stale closures
//     useLayoutEffect(() => {
//       onTextChangeRef.current = onTextChange;
//       onSelectionChangeRef.current = onSelectionChange;
//     });

//     // Enable or disable editor based on readOnly prop
//     useEffect(() => {
//       if (typeof ref === 'object' && ref?.current) {
//         ref.current.enable(!readOnly);
//       }
//     }, [ref, readOnly]);

//     useEffect(() => {
//       const container = containerRef.current;
//       if (!container) return;

//       const editorContainer = document.createElement('div');
//       container.appendChild(editorContainer);

//       const quill = new Quill(editorContainer, {
//         theme: 'snow',
//         readOnly, // Set readOnly from props
//       });

//       // Assign Quill instance to ref
//       if (typeof ref === 'object' && ref !== null) {
//         ref.current = quill;
//       }

//       // Set default value if available
//       if (defaultValueRef.current) {
//         quill.setContents(defaultValueRef.current);
//       }

//       // Handle text changes
//       quill.on('text-change', (delta, oldDelta, source) => {
//         if (onTextChangeRef.current) {
//           onTextChangeRef.current(delta, oldDelta, source);
//         }
//       });

//       // Handle selection changes
//       quill.on('selection-change', (range, oldRange, source) => {
//         if (onSelectionChangeRef.current) {
//           onSelectionChangeRef.current(range, oldRange, source);
//         }
//       });

//       return () => {
//         if (typeof ref === 'object' && ref !== null) {
//           ref.current = null;
//         }
//         container.innerHTML = '';
//       };
//     }, [ref]);

//     return <div ref={containerRef}></div>;
//   },
// );

// Editor.displayName = 'Editor';
