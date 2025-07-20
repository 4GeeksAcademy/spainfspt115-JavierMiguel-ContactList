export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    //contacts actions
    case "get_contacts":
      return { 
        ...store, 
        contacts: action.payload 
      };

    case "add_contact":
      return { 
        ...store, 
        contacts: [...store.contacts, { ...action.payload, id: Date.now() }] 
      };

    case "update_contact":
      return {
        ...store,
        contacts: store.contacts.map(c => c.id === action.payload.id ? action.payload : c)
      };
    case "delete_contact":
      return {
        ...store,
        contacts: store.contacts.filter(c => c.id !== action.payload)
      };

    default:
      throw Error('Unknown action.');
  }
}
