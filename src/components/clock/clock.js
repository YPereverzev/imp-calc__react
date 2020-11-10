<span id="time">00:00:00</span>

<script type="text/javascript">  
    setInterval(function () {  
        date = new Date(),  
        h = (date.getHours() + 8) % 24,  
        m = date.getMinutes(),  
        s = date.getSeconds(),  
        h = (h < 10) ? '0' + h : h,  
        m = (m < 10) ? '0' + m : m,  
        s = (s < 10) ? '0' + s : s,  
        document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
    }, 1000);  
</script>