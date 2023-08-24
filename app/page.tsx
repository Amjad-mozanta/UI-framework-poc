"use client";

import Breadcrumbs from "./components/common/Breadcrumbs";
import TableView from "./components/common/Table";

export default function Home() {
  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg mt-14 bg-white">
          <Breadcrumbs path="Users"/>
          <div className="mt-4">
            <TableView />
          </div>
        </div>
      </div>
    </>
  );
}
