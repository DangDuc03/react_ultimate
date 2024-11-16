import React, { useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import BookDetail from './book.detail';

const BookTable = (props) => {

    const { current, pageSize, setCurrent, setPageSize, total, dataBook } = props

    const [isOpenDetailBook, setIsOpenDetailBook] = useState(false)
    const [dataDetailBook, setDataDetailBook] = useState(null)


    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>
                        {/* index + (2-1) x 10  */}
                        {(index + 1) + (current - 1) * pageSize}
                    </>
                )
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => {
                return (
                    <a
                        onClick={() => {
                            setDataDetailBook(record)
                            console.log("check detail record : ", record)
                            setIsOpenDetailBook(true)
                        }}
                        href='#'>{record._id}
                    </a>
                )
            }
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (text, record, index, action) => {
                if (text) {
                    return new Intl.NumberFormat("vi-VN",
                        { style: "currency", currency: "VND" }
                    ).format(text)
                }

            }
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',

        },
        {
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">
                    <div
                        style={{
                            color: "orange",
                            cursor: "pointer"
                        }}
                    >
                        <EditOutlined />
                    </div>
                    <div
                        style={{
                            color: "red",
                            cursor: "pointer"
                        }}>
                        <DeleteOutlined />
                    </div>
                </Space>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        // setCurrent, setPageSize
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(pagination.current) // "1" ==> 1
            }
        }
        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(pagination.pageSize) // "5" ==> 5
            }
        }

    };


    return (
        <>
            <Table
                columns={columns}
                dataSource={dataBook}
                onChange={onChange}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
            />
            <BookDetail
                isOpenDetailBook={isOpenDetailBook}
                setIsOpenDetailBook={setIsOpenDetailBook}
                dataDetailBook={dataDetailBook}
                setDataDetailBook={setDataDetailBook}
            />
        </>
    )
}

export default BookTable;