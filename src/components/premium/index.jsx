import Button from "../button";

export default function Premium() {

    return (
        <section
            className="bg-[color:var(--background-secondary)] mb-4 rounded-2xl border border-[color:var(--background-secondary)] py-3 px-4 flex flex-col gap-2.5 hover:bg-white/[0.50]  ">
            <h6 className="text-xl leading-6 font-extrabold" >Premium'a Abone Ol </h6>
            <p className="leading-5 text-[15px]font-bold">
                Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
            </p>
           <div>
            <Button className="w-32 h-12 text-lg">Abone Ol </Button>
           </div>
        </section>
    )
 
}