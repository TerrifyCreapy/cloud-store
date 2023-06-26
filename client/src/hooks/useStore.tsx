import { useContext } from "react";
import { Provider } from "../main";

export default function useStore() {
    const root = useContext(Provider);

    return root;
}
