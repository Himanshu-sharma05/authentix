import { Input } from "@/components/ui/input"
import { div } from "framer-motion/client"

const page = () => {
  return (
    <div className="p-10">
        <div className="text-center text-5xl font-bold ">Contact Us</div>
        <div className="text-center text-neutral-400 mt-5 text-xl text-balance">Have questions about CredVerify Academia? Need technical support? Want to discuss enterprise solutions? We're here to help with multiple support channels and expert assistance.</div>
        <div className="flex justify-around gap-15 py-15 px-50">
            <div className="left  flex flex-col gap-5 ">
               <div className="flex gap-5 card py-7 pl-10 pr-35 rounded-2xl bg-neutral-100 w-full dark:text-[#E3E8EF] dark:bg-[#1F1F1F]">
        <div className="card-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
        </div>
        <div className="card-right ">
            <div className="font-bold ">Email</div>
            <div className="text-muted-foreground mt-1">Get a response within 24 hours</div>
            <div className="mt-3">hello@company.com</div>
        </div>
        
    </div>
               <div className="flex gap-5  card py-7 pl-10 pr-35 rounded-2xl bg-neutral-100 w-full dark:text-[#E3E8EF] dark:bg-[#1F1F1F]">
        <div className="card-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
        </div>
        <div className="card-right ">
            <div className="font-bold ">Phone Support</div>
            <div className="text-muted-foreground mt-1">Mon-Fri, 9AM-6PM EST</div>
            <div className="mt-3">+1 (555) 123-4567</div>
        </div>
        
    </div>
               <div className="flex gap-5  card py-7 pl-10 pr-35 rounded-2xl bg-neutral-100 w-full dark:text-[#E3E8EF] dark:bg-[#1F1F1F]">
        <div className="card-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div className="card-right ">
            <div className="font-bold ">Office</div>
            <div className="text-muted-foreground mt-1">Schedule an in-person meeting</div>
            <div className="mt-3">123 Innovation St, Tech City</div>
        </div>
        
    </div>
               <div className="flex gap-5  card py-7 pl-10 pr-35 rounded-2xl bg-neutral-100 w-full dark:text-[#E3E8EF] dark:bg-[#1F1F1F]">
        <div className="card-left">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-square-icon lucide-message-square"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div className="card-right ">
            <div className="font-bold ">Live Chat</div>
            <div className="text-muted-foreground mt-1">Instant support available right now</div>
            <div className="mt-3">Start chatting</div>
        </div>
        
    </div>
            </div>
            <div className="right dark:bg-[#121212] p-10 rounded-2xl">
                <form action="" >
                    <div className="font-bold">Send us a message</div>
                    <div className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</div>
                    <div className="mt-5 flex gap-5 ">
                        <div className="flex flex-col gap-2">
                        <label htmlFor="firstname" className="text-sm" >First Name *</label>
                        <Input placeholder="first name" name="firstname" required/>
                        </div>
                        <div className="flex flex-col gap-2">
                        <label htmlFor="lastname " className="text-sm">Last Name *</label>
                        <Input placeholder="last name" name="lastname" required/>
                        </div>
                    </div>
                    <div className="email mt-5 flex flex-col gap-3">
                        <label htmlFor="email">Email</label>
                        <Input placeholder="email" name="email" type="email" required/>
                        
                    </div>
                    <div className="email mt-5 flex flex-col gap-3">
                        <label htmlFor="email">Organization</label>
                        <Input placeholder="Organization" name="organization" type="text" required/>
                        
                    </div>
                    <div className="mt-5 flex flex-col gap-3">
                        <label htmlFor="message" className="font-bold">Message</label>
                        <Input type="text" placeholder="type your message" name="message"/>

                    </div>
                    <button
          className="group/btn mt-10 relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          SUBMIT
          <BottomGradient />
        </button>
                </form>
            </div>
        </div>
    </div>
  )
}
export default page

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

