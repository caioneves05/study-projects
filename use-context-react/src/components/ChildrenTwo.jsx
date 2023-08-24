import useAppContext from '../hook/useAppContext'

export default function ChildrenTwo() {
    const { setName } = useAppContext()
    return(
            <button onClick={() => setName('Carlos Maia')}>Mude o nome</button> 
    )
  }