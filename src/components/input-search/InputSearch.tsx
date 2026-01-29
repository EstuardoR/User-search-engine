import { InputContainer, InputStyled } from "./styles";


interface InputSearchProps {
    onSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder: string;
}

export const InputSearch: React.FC<InputSearchProps> = ({ onSearch, value, placeholder }) => {
    return (
        <InputContainer>
            <InputStyled
                onChange={onSearch}
                value={value}
                placeholder={placeholder}
            />
        </InputContainer>
    );
}