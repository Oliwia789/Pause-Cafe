import "../styles/account.css"
import React from "react"

function Account() {

    const passwordCheck =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    const emailCheck = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const [error, setError] = React.useState()

    const [formData, setFormData] =  React.useState({
        pseudo: "",
        email: "",
        password: "",
        confirmPassword: "",
        conditions: false
    })

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
            setError("Veuillez devez remplir tous les champs du forumulaire pour pouvoir vous inscrire")
        } else if (formData.pseudo.length < 5 || formData.pseudo.length > 40){
            setError("Votre pseudo doit contenir entre 5 et 40 caractères")
        } else if (formData.email.length < 10 || formData.email.length > 150) {
            setError("Votre email doit contenir entre 10 et 150 caractères")
        } else if (!formData.email.match(emailCheck)) { 
            setError("Votre format d'email n'est pas valide")

        } else if (!formData.password.match(passwordCheck)) {
            setError("Votre mot doit doit comporter entre 8 et 30 caractères, au moins une lettre majuscule et minuscule, un chiffre ainsi qu'un caractère spécial")
        } else if (formData.password != formData.confirmPassword) {
            setError("Les mots de passe que vous avez entrés ne sont pas identiques")
        }
        else {
            setError("oui")
        }
    }

    return (
        <main>
            <h1>Créer un compte client</h1>
            <form onSubmit={handleSubmit}>
                <span>Pseudo</span>
                <input type="text" placeholder="mon pseudo" name="pseudo" onChange={handleChange} value={formData.pseudo}/>
                <span>Email</span>
                <input type="text" placeholder="mon@email.fr" name="email" onChange={handleChange} value={formData.email}/>
                <span>Mot de passe</span>
                <input type="password" placeholder="mon mot de passe" name="password" onChange={handleChange} value={formData.password}/>
                <span>Confirmation mot de passe</span>
                <input type="password" placeholder="confirmer mon mot de passe" name="confirmPassword" onChange={handleChange} value={formData.confirmPassword}/>
                <div>
                    <input type="checkbox" name="conditions" onChange={handleChange} checked={formData.conditions}/>
                    <label htmlFor="conditions">J'accepte les conditions d'utilisation</label>
                </div>
                <button>Je m'inscris</button>
                <div>{error}</div>
            </form>
            <a>Déjà inscrit ? Se connecter</a>
        </main>
    )
}

export default Account 