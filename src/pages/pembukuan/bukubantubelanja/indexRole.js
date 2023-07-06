import React from "react";
import { useSelector } from "react-redux";
import BukuBantuBelanja from ".";
import IndexUnit from "./indexUnit";

function IndexRoleBukuBantu() {
    const {user } = useSelector((state) => state.reducerGlobal)

    return (
        <div>
            {
                user?.group === "Keuangan" ?
                    <BukuBantuBelanja />
                    : user?.group === "bendaharaunit" ?
                        <IndexUnit />
                        :
                        <>Tidak Ada Role</>
            }
        </div>
    )
}
export default IndexRoleBukuBantu;