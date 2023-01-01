import { Outlet } from "@remix-run/react";

export default function Gallery() {
  return (
    <div>
      <h1>Gallery</h1>
      <Outlet />
    </div>
  );
}
