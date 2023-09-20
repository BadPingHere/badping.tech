Recently, i remember watching a Tom Scott video, I can't recall the video, but it brought up a question that is something that is hard to think on, but is well documented: How do you trust the internet? How do you trust that there isnt some backdoor that can watch your every move? Well, simple answer, you cant. The long answer is much more complicated.
<br><br>

# Shifting trust

To start, lets assume that there is a file, lets say ms_process.exe is backdoor. So, how do you check and confirm? Well you google it and see if other people have encounterd it.
<br><br>

![alt text][image]

[image]: https://cdn.upload.systems/uploads/uK8nV4td.png

Okay, what if this is injected html, by some sort of browser manipulation from ms_process.exe? Its okay though, I can just check the SHA256 hashes of my firefox instalation, and make sure its not compromised. But how do I know that my checksum check being displayed to me is correct? That its not being silently changed in the background?
<br><br>

Fuck, well maybe I can create my own checksum, and run it myself, that way I know 100% for-sure that this is safe, and that I can trust the result. Well, of course not. How do I know that what im executing, my python script or my rust program is secretly adding a bit of code that makes it always give my file a checkmark. What if I check the source again? Well, how do I know my text editor isnt compromised? The complier? The enitre coding language?
<br><br>

Okay, different method. Lets use a virus scanner. Let me just pop it into virustotal, and see what it says.
<br><br>

![alt text][image2]

[image2]: https://cdn.upload.systems/uploads/jYc1xKkg.png

Well, it says it's legit, but we fall into the same rabbit hole. How do we trust the webpage, or how do we trust the file uploading? Okay, lets scan it with the Windows Defender tool. Same problem. How do know it isnt scanning a different file, that it isnt compromised? Or better yet, how do we know our operating system is even safe? Can we prove with 100% certainty that there is not already a backdoor in my computer?
<br><br>

We cant, so, for extreme trust, we write our own Operating System, we hand build it. How do we get it on the computer? There is no trusted way of file transfer. Checksums can be faked, USB drives can be compromised, airdrop is, well, airdrop, and the process can be attacked before and during transit.
<br><br>

But let's say, in a perfect world, we get our OS running, with extreme logging and tools already pre-made, by hand, to make sure everything is safe. But how do you know you aren't backdoored still? How do you know your MSI motherboard isnt rewriting a few files and logs? Or maybe intel is sending your log to the CIA? Even your Samsung SSD could be compromised. And that is the length of the trust in computer science.
<br><br>

# Trusting our Trust

So, how do we trust what we see? Well, we unfornately, cant. There is always some way for malware to enter your computer, and some you cant protect against. You can always theory craft a way for malware to hide itself. However, we can pull the trust farther closer to us, allowing less and less places to be compromised. For the average user, you will not be attacked via hardware backdoors or OS backdoors. But, for nation states, these are viable ways to infiltrate. Therefore, many goverments use a wide variety of OS's depending on the use-case. For example, the US Government uses Windows on many low level machines. However, the highly sensitive computers and backend's usually run a linux distro, primarily Security-Enhanced Linux (SELinux) made by Red Hat Software.
<br><br>

# Conclusion

So, whats the moral? If you havent figured it out by now, this is not just for technology. Sure, an error code can be wrong, or a virus can be meddling with your browser, but that is far less uncommon than lying and negligence. Trust is something to be earned, not given out to anyone and anything that asks. So, the next time someone says "just trust me", be a little skeptical.
