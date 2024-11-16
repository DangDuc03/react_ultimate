import { useEffect, useState } from "react";
import BookForm from "../../components/books/book.form.control";
import BookTable from "../../components/books/book.table";
import { getAllBooksAPI } from "../../services/api.service";
import BookFormUnControl from "../../components/books/book.form.uncontrol";

const BooksPage = () => {
    const [dataBook, setDataBook] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(5) // thực tế thì tối thiểu thường hiển thị 10 phần tử
    const [total, setTotal] = useState(0)

    useEffect(() => {
        loadBooks()
    }, [current, pageSize])

    const loadBooks = async () => {
        const response = await getAllBooksAPI(current, pageSize)
        if (response.data) {
            setDataBook(response.data.result)
            setCurrent(response.data.meta.current)
            setPageSize(response.data.meta.pageSize)
            setTotal(response.data.meta.total)
        }
    }

    return (
        <div>
            {/* <BookForm
                loadBooks={loadBooks}
            /> */}
            <BookFormUnControl
                loadBooks={loadBooks}
            />
            <BookTable
                current={current}
                pageSize={pageSize}
                total={total}
                dataBook={dataBook}
                setPageSize={setPageSize}
                setCurrent={setCurrent}
            />
        </div>
    )
}

export default BooksPage;