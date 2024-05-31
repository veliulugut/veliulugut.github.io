import {TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
//import {useState} from "react";
const Form = () => {

    //const [name,setName] = useState('');
    //const [email,setEmail] = useState('')
    //const [phone,setPhone] = useState('')
    //const [subject,setSubject] = useState('')
    //const [text,setText] = useState('')

    return (
        <div className="bg-white border-none shadow-[0_0_5px_3px_rgba(144,144,144,.1)] flex-[2] px-5 pt-2 pb-5">
            <h1 className="font-bold pt-5">Get in Touch</h1>
            <h2 className="pt-3 text-[#21cc7a]">This Section is Currently Unavailable </h2>

            <form action="" className="flex flex-col px-5 py-8 gap-10">
                <section className="w-full">
                    <TextField
                        //onChange={(e) => setName(e.target.value)}
                        className="w-full text-[#21cc7a]"
                        id="standard-basic"
                        label="Name"
                        variant="standard"
                        name="name"
                        disabled/>
                </section>
                <section className="flex flex-row gap-3">
                    <TextField
                        //onChange={(e) => setEmail(e.target.value)}
                        className="w-full"
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        variant="standard"
                        disabled/>
                    <TextField
                        //onChange={(e) => setPhone(e.target.value)}
                        className="w-full"
                        id="standard-tel-input"
                        label="Phone Number"
                        type="tel"
                        variant="standard"
                        disabled/>
                </section>
                <section className="flex flex-col gap-5">
                    <TextField
                        //onChange={(e) => setSubject(e.target.value)}
                        className="w-full"
                        id="standard-basic"
                        label="Subject"
                        variant="standard"
                        disabled/>

                    <TextField
                        //onChange={(e) => setText(e.target.value)}
                        className="w-full"
                        id="standard-multiline-static"
                        label="Your Message"
                        multiline
                        rows={6}
                        variant="standard"
                        disabled/>
               </section>
                    <button type="submit" className="w-[120px] bg-[#21cc7a] text-white py-2 rounded-[5px] self-end" disabled>
                        Send <SendIcon/>
                    </button>
            </form>

        </div>
    )
}

export default Form;