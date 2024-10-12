import SendMessageForm from "./SendMessageForm.jsx";

export default function Chat() {
    return(
        <div className="relative w-full max-w-[550px] px-4 py-3 rounded-lg bg-slate-900 opacity-80">
            <ChatMessageBox/>
            <SendMessageForm/>
        </div>
    )
}

const ChatMessageBox = () => {
    return(
        <div className='h-[70vh] overflow-auto'> ChatMessageBox </div>
    )
}