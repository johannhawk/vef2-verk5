type Props = {};

async function createInvoice(formData: FormData) {
    'use server'
 
    const rawFormData = {
      content_title: formData.get('content_title'),
      content: formData.get('content')
    }
 
    //console.log(rawFormData)
}

export default async function SubmitPage({}: Props) {
    return (
        <form method="POST" action={createInvoice}>
            <p>Innsetning</p>
            <div>
                <label htmlFor="content_title">Titill:</label>
                <input type="text" id="content_title" name="content_title" />
                <label htmlFor="content">Efni:</label>
                <input type="text" id="content" name="content" />
            </div>
            <button type="submit">Senda</button>
        </form>
    )
}