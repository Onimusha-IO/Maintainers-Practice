import { createContext, useState } from "react";

const UiContext = createContext<any>(null);

const UiProvider = ({ children }: any) => {
  const [userValidated, setUserValidated] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [modal, setModal] = useState({
    state: false,
    type: null,
    title: "",
    accept: "",
    reject: "",
    data: null,
  });

  return (
    <UiContext.Provider value={{ userValidated, setUserValidated, showMenu, setShowMenu, modal, setModal }}>
      {children}
    </UiContext.Provider>
  );
};

export { UiProvider };
export default UiContext;
