"use client";

import Breadcrumbs from "../components/common/Breadcrumbs";
import Form from "../components/common/Form";

export default function User() {
  return (
    <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 bg-white">
          <Breadcrumbs path="Add user"/>
          <div className="mt-4">
            <Form />
          </div>
        </div>
      </div>
  )
}