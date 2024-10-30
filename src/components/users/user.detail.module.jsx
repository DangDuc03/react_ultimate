import { Drawer } from "antd";
import { useEffect, useState } from "react";

const UserDetailModule = (props) => {

    const { detailModule, setDetailModule, isDetailModuleOpen, setIsDetailModuleOpen } = props;

    const [id, setID] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    useEffect(() => {
        if (detailModule) {
            setID(detailModule._id)
            setFullName(detailModule.fullName)
            setEmail(detailModule.email)
            setPhone(detailModule.phone)
        }

    }, [detailModule])

    const onHandleUploadFile = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return
        }
        const file = event.target.files[0]
        if (file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
        console.log("check file : ", file)
    }

    console.log("check preview : ", preview)

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
                        <div
                            style={{
                                marginTop: "10px",
                                height: "100px",
                                width: "150px",
                                border: "1px solid #ccc"
                            }}
                        >
                            <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
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
                            <input
                                onChange={(event) => onHandleUploadFile(event)}
                                type="file" id="btnUpload" hidden />
                        </div>
                        {preview &&
                            <div
                                style={{
                                    marginTop: "10px",
                                    height: "100px",
                                    width: "150px",
                                    border: "1px solid #ccc"
                                }}
                            >
                                <img style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                    src={preview} alt="Image Error" />
                            </div>
                        }
                    </>
                    :
                    <p>Không có dữ liệu</p>
                }


            </Drawer>
        </>
    )
}

export default UserDetailModule;