export default function Post() {
    return <form action="/add" method="post">
    <div>
        <textarea name="post" placeholder="Texte ...."  ></textarea>
    </div>
    <div>
        <button type="submit">Create</button>
    </div>   
</form>
}
