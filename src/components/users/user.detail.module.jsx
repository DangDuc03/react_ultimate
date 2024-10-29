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
            <Drawer
                width={"40vw"} // = 40% screen
                title="Chi tiết User"
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
                        <p>Phone : {phone}</p><br />
                        <p>Avatar : </p><br />
                        <div >
                            <img style={{ width: "100px", height: "100px", borderRadius: "10px" }}
                                src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${detailModule.avatar}`} alt="Image Error" />
                        </div>
                        <div>
                            <label
                                htmlFor="btnUpload"
                                style={{
                                    display: "block",
                                    width: "fit-content",
                                    marginTop: "15px",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    backgroundColor: "orange",
                                    cursor: "pointer"
                                }}
                            >
                                Upload File
                            </label>
                            <input type="file" id="btnUpload" hidden />
                        </div>
                    </>
                    :
                    <p>Không có dữ liệu</p>
                }


            </Drawer>
        </>
    )
}

export default UserDetailModule;