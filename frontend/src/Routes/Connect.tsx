import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

export interface IFormData {
    username: string,
    password: string
}

export interface IConnectProps {
    setUsername: Dispatch<SetStateAction<string>>
}

export default function Connect({setUsername}: IConnectProps) {

    const navigate = useNavigate()
    const location = useLocation()

    console.log(location)

    const [formData, setFormData] = useState<IFormData>({password: "", username: ""})

    const handleChange = (e: ChangeEvent) => {
        setFormData(prevState => {
            return {
                ...prevState,
                // @ts-ignore
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setUsername(formData.username)
        navigate("/")
    }

    return (
        <div>
        <h1>Create user</h1>
        <form onSubmit={handleSubmit}>
            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th>
                            <label>Name: </label>
                        </th>
                        <td>
                            <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Password: </label>
                        </th>
                        <td>
                            <input type="text" name="password" onChange={handleChange} />
                        </td>
                    </tr>
                    <tr>
                        <td  align ="right">
                            <button>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    )

}
