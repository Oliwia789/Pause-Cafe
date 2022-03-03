import "../styles/account.css"
import React from "react"

function Account() {

    //Regex pour valider format email et les conditions du e-mail

    //eslint-disable-next-line
    const passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    //eslint-disable-next-line
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //UseState error pour ajouter le message d'erreur 
    const [error, setError] = React.useState()

    const [formData, setFormData] =  React.useState({
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: "",
        conditions: false
    })

    //Je récupére dans l'objet formData les informations données par l'utilisateur 
    //l'objet déconstruit permet d'utiliser ensuite chaque élément pour faire les vérifications avec
    //event target au click du bouton "submit"
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value 
        }))
    }



    function handleSubmit(event) {
        event.preventDefault()
        if(!formData.pseudo.length || !formData.email.length || !formData.password.length || !formData.confirmPassword.length){
            setError("Vous devez remplir tous les champs du formulaire pour pouvoir vous inscrire")
        } else if (formData.pseudo.length < 5 || formData.pseudo.length > 40){
            setError("Votre pseudo doit contenir entre 5 et 40 caractères")
        } else if (formData.email.length < 10 || formData.email.length > 150) {
            setError("Votre e-mail doit contenir entre 10 et 150 caractères")
        } else if (!formData.email.match(emailCheck)) { 
            setError("Votre format d'e-mail n'est pas valide")

        } else if (!formData.password.match(passwordCheck)) {
            setError("Votre mot doit comporter entre 8 et 30 caractères, au moins une lettre majuscule et minuscule, un chiffre ainsi qu'un caractère spécial")
        } else if (formData.password !== formData.confirmPassword) {
            setError("Les mots de passe que vous avez entrés ne sont pas identiques")
        } else if (!formData.conditions) {
            setError("Vous devez accepter nos conditions d'utilisation pour pouvoir vous inscrire")
        }
        else {
            setError("")
            alert("Merci de votre inscription ! Votre compte client à bien été crée.")
        }
    }

    return (
        <main className="account_section_main">
            <section className="account_section">
                <h1 className="account_title">Créer un compte client</h1>
                <form className="account_form"onSubmit={handleSubmit}>
                    <span className="account_span">Pseudo</span>
                    <input className="account_input" type="text" placeholder="mon pseudo" name="pseudo" onChange={handleChange} value={formData.pseudo} autoComplete="off"/>
                    <span className="account_span">E-mail</span>
                    <input className="account_input" type="text" placeholder="mon@email.fr" name="email" onChange={handleChange} value={formData.email} autoComplete="off"/>
                    <span className="account_span">Mot de passe</span>
                    <input className="account_input" type="password" placeholder="mon mot de passe" name="password" onChange={handleChange} value={formData.password} autoComplete="off"/>
                    <span className="account_span">Confirmation mot de passe</span>
                    <input className="account_input" type="password" placeholder="confirmer mon mot de passe" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword} autoComplete="off"/>
                    <div className="checkbox_container">
                        <input className="account_checkbox" type="checkbox" name="conditions" onChange={handleChange} checked={formData.conditions}/>
                        <label className="account_checkbox_span" htmlFor="conditions">J'accepte les conditions d'utilisation</label>
                    </div>
                    <div className="error">{error}</div>
                    <button className="account_btn">Je m'inscris</button>
                </form>
                <span className="account_forget">Déjà inscrit ? Se connecter</span>
            </section>
        </main>
    )
}

export default Account 