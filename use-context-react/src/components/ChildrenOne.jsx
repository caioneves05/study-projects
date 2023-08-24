import useAppContext from "../hook/useAppContext";

export default function ChildrenOne() {
  const { name, numero } = useAppContext()
    return <div>Nome: {name} e número: {numero}</div>
  }