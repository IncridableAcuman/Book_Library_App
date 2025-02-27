class UserDTO {

    id;
    name;
    email;
    isAdmin;
    avatar;
    favourites;
    createdAt;
    constructor(model){
        this.id = model.id;
        this.name = model.name;
        this.email = model.email;
        this.isAdmin = model.isAdmin;
        this.avatar = model.avatar;
        this.favourites = model.favourites;
        this.createdAt = model.createdAt;
    }
}
module.exports = UserDTO;