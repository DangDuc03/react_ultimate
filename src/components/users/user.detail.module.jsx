import { Drawer } from "antd";
import { useEffect, useState } from "react";

const UserDetailModule = (props) => {

    const { detailModule, setDetailModule, isDetailModuleOpen, setIsDetailModuleOpen } = props;

    const [id, setID] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => {
        console.log("check data update props: ", detailModule)
        if (detailModule) {
            setID(detailModule._id)
            setFullName(detailModule.fullName)
            setEmail(detailModule.email)
            setPhone(detailModule.phone)
        }

    }, [detailModule])


    return (
        <>
            <Drawer title="Chi tiết User"
                onClose={() => {
                    setIsDetailModuleOpen(false)
                    setDetailModule(null)
                }}
                open={isDetailModuleOpen}

            >
                {detailModule ?
                    <>
                        <p>ID : {id}</p><br />
                        <p>Full Name : {fullName}</p><br />
                        <p>Email : {email}</p><br />
                        <p>Phone : {phone}</p>
                    </>
                    :
                    <p>Không có dữ liệu</p>
                }


            </Drawer>
        </>
    )
}

export default UserDetailModule;