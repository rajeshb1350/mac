export class urlPortService{
    private currenthostname = window.location.hostname;
    private currenthostprotocol = window.location.protocol;
    private port = window.location.port;
    private apacheserver = '';
    private tomcatserver = '/lms';
    private tomcatPort =  '8085';
    private apachePort = this.port;

    private url = [
        this.currenthostprotocol + "//" + this.currenthostname + ":" + this.apachePort + this.apacheserver, //Apache Server
        this.currenthostprotocol + "//" + this.currenthostname + ":" + this.tomcatPort + this.tomcatserver // Tomcat Server
    ];

    getUrl(port){
        return this.url[port];
    }
}