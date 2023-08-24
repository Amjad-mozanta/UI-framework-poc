'use client';
import react, {useState} from "react";
import { Select, SelectItem, TextInput, Flex, Button, Card } from '@tremor/react';
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [form, setForm] = useState({
    type: "ADMIN",
    name: ""
  })

  const onHandleFormChange = (value: String, name="type") => {
    setForm({...form, [name]: value})
  }

  const onHandleSave = () => {
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users") || "") : [];
    users.push(form)
    localStorage.setItem("users", JSON.stringify(users) || "");
    router.push("/")
  }
  return (
    <>
    <Card>
      <Flex flexDirection='col'>
        <Select placeholder="User type" value={form.type} className='my-2' onValueChange={onHandleFormChange}>
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="DEVELOPER">Developer</SelectItem>
          <SelectItem value="DESIGNER">Designer</SelectItem>
        </Select>
        <TextInput placeholder="Name" name="name" className='my-2' onChange={e => onHandleFormChange(e.target.value, e.target.name)}/>
        <div  className='my-2 flex justify-end'>
        <Button className='order-last' onClick={onHandleSave}>Save User</Button>
        </div>
      </Flex>
      </Card>
    </>
  );
}
