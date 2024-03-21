import { UpdateForm, UploadPhoto } from "@/components/client";
import React from "react";

const updateUserProfile = ( {params}:{params:{userId:string}}) => {
  return (
    <main>
      <section>
        <UploadPhoto />
      </section>
      <section>
        <UpdateForm userId={params.userId}/>
      </section>
    </main>
  );
};

export default updateUserProfile;
