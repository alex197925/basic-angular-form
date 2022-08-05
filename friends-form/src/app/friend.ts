
export class Friend {
  private _firstName: string;
  private _secondName: string;
  private _email: string;
  private _phone: number;
  private _language: string;

  constructor(firstName: string, secondName: string, email: string, phone: number, language: string) {
    this._firstName = firstName;
    this._secondName = secondName;
    this._email = email;
    this._phone = phone;
    this._language = language;
  }


  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get secondName(): string {
    return this._secondName;
  }

  set secondName(value: string) {
    this._secondName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }

  get language(): string {
    return this._language;
  }

  set language(value: string) {
    this._language = value;
  }
}
