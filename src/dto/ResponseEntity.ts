import { StatusCode } from './StatusCode';


export class ResponseEntity{

    private response: any;
    private object: any;
    private statusCode: StatusCode = StatusCode.INTERNAL_SERVER_ERROR;
    private message: string = '';

    setResponse(res: any){
        this.response = res;
        return this;
    }
    setObject(object: any){
        this.object = object;
        return this;
    }
    setStatusCode(statusCode: StatusCode){
        this.statusCode = statusCode;
        return this;
    }
    setMessage(message: string){
     this.message = message;
     return this;
    }

    build(){
        this.response.writeHead(this.statusCode, { 'Content-Type': 'application/json' });
        this.response.end(JSON.stringify({
            document: this.object,
            message: this.message,
            statusCode: this.statusCode
        }));

    }
}