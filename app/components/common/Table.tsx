import React, { useEffect, useState } from "react";
import { StatusOnlineIcon } from "@heroicons/react/outline";
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
  Button,
  Flex,
} from "@tremor/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function TableView() {
  const [users, setUsers] = useState([]);
useEffect(() => {
  const data = JSON.parse(localStorage.getItem("users") || "") || [];
  setUsers(data);
}, [])
  const router = useRouter()
  return (
  <Card className="overflow-auto border border-rounded p-4">
    <Flex justifyContent="between" className="space-x-2 pt-4">
    <Title>Users</Title>
    <Button onClick={() => router.push('/users')}>Add user</Button>
    </Flex>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Position</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((item) => (
          <TableRow key={item.name}>
            <TableCell><Link href="/users/123">{item.name}</Link></TableCell>
            <TableCell>
              <Text>{item.type}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" icon={StatusOnlineIcon}>
                Active
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
)};