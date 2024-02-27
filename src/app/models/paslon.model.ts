export class Paslon {
  nomor!:number
  namaPaslon!:string
  votes!:number
  photo!:string
  moto!:string
  constructor(
    nomor:number,
    namaPaslon:string,
    votes:number,
    photo:string,
    moto:string
  ) {
    this.nomor=nomor
    this.namaPaslon=namaPaslon
    this.votes=votes
    this.photo=photo
    this.moto=moto
  }

  voteUp():void{
    this.votes += 1
  }

  voteDown():void{
    if (this.votes > 0)
      this.votes -= 1
  }
}
