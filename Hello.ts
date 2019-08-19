class ABC
{
  a:number;
  b:number;
  c:number;
  constructor(value1:number, value2:number)
  {
    this.a = value1;
    this.b = value2;
  }
  Add():void
  {
    this.c = this.a + this.b;
    console.log("This is Addition of Two Numbers" +this.c);
  }
}
