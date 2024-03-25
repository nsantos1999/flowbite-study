import { Alert, Button, Card, Flowbite } from "flowbite-react";
import Image from "next/image";
import { AdminLayout } from "./layouts/AdminLayout";

export default function Home() {
  return (
    <AdminLayout>
      <div>
        <Button>Click me</Button>
      </div>
    </AdminLayout>
  );
}
