import { useState } from "react"
import { InputSearch } from "./components/input-search/InputSearch"
import useUsers from "./hooks/useUsers/useUsers";
import { InputSearchWrapperStyled, ListWrapperStyled, MainWrapperStyled } from "./styles";

function App() {
  const [value, setValue] = useState<string>('');
  const { users } = useUsers();

  const onSearching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const filteredUsers = users.filter((u) => u.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

  return (
    <MainWrapperStyled>
      <InputSearchWrapperStyled>
        <InputSearch onSearch={onSearching} value={value} placeholder={"Escribe aquí"} />
      </InputSearchWrapperStyled>
      {filteredUsers.length === 0 && (
        <p>No se encontraron coincidencias</p>
      )}
      <ListWrapperStyled>
        {filteredUsers.map((item, index) => (
          <li key={index}>
            {item.name}
          </li>
        ))}
      </ListWrapperStyled>
    </MainWrapperStyled>
  )
}

export default App
