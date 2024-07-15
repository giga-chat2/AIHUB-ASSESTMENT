<p align="center">
  <img alt="Coding" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Fgiga-chat-logo.png?alt=media&token=da4e1855-70f0-4836-83e5-8a9ec15ba5ac" >
</p>


### GIGA-CHAT is an AI-powered real-time ai-assisted chat application designed for seamless peer-to-peer and group communication

### Current Version (Mobile view under progress): https://www.giga-chat.tech/

### Following are some main features :  

**.Peer to Peer communication**
<img alt="Coding" align="left" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Fpeer_to_peer_chatting.png?alt=media&token=ebe525ce-7120-4679-83fc-e30e51e5cb39" >

- Enables peer to peer communication via socket.io , also provides real-time suggestions by taking previous as context using models like gpt-3.5-turbo(fine-tuned),claude and gemini-pro . 
- GIGA-CHAT also display other basic stuff like display other person's pfp, online/offline status , etc. 
- Users can search their friends profile through search bar and message them .
- Additionally the chats are displayed from newest to oldest.
- Users can send files and voice notes in real time via socket.io
- All the media data is stored in firebase storage.
- Users can delete the user from friend list as well.
- Voice Calling using VOIP is under development.

**.Group Chatting**
<img alt="Coding" align="right" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Fgroup-chatting.png?alt=media&token=5bdf1b7e-c18d-4604-831e-1a8c126866bf" >

- Enables users to create groups with their friends .
- Users can set their desired group name and pfp.
- The group creator can assign the admin roles accordingly.
- Users can set their desired group quote.
- Users can join the group externally by searching the group's name in the search bar and sending the request
- Users can also leave the group .

**.Archive Chatting**
<img alt="Coding" align="left" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Farchive-chatting.png?alt=media&token=7a94554d-c9c7-45fd-aa58-c74137bf2f37" >

- Users can archive the chats from the allchats section .
- Users can unarchive the chats if they wish .
- Users get all the functinalities same as normal chats .
- Users need set a password initially when first time entering the archive section.
- Next time they are trying to access the archived chats section they need to enter the password
- Users can't access the archive section if they don't have any chats archived
- Voice Calling using VOIP is under development.

**.Ask AI Chatting**
<img alt="Coding" align="right" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Fask_ai.png?alt=media&token=2e5489cb-c3d2-47a9-ab66-d38fdbb4aac0" >

- Users can ask their queires to different ai models.
- Available models are gpt-3.5-turbo,claude,mistral-7b,gemm-7b,llama2 and phi-2
- Users can switch between ai models according to their need.
- An image is generated relevant to the query being asked .
- Record is been maintained of every being asked according to the date and timestamp
- Users can delete their chats from the history if they want.

**.Video Call Meetings**
<img alt="Coding" align="left" width="300" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Fvideo_calling.png?alt=media&token=efd39c2d-9ede-4a93-ad4c-a17f359ff152" >

- Users can create a video call meetings with their friends.
- Meeting link is being sent in real time.
- Can join externally by entering the code .
- Users can send text messages within the meeting.
- Users can enable/disable their camera and microphone .
- Record of join and leaving time is been maintained for every meeting .
- Users can also view the list of members in the meetings.
- Screen sharing is also available.
- Integrated with ZegoCloud

### Tech Stack Used : 
<img alt="Coding" align="center" width="500" src="https://firebasestorage.googleapis.com/v0/b/giga-chat-9416b.appspot.com/o/aiImages%2Ftechstackicons.png?alt=media&token=a84e713d-481c-4efe-8890-edb9f85e29f6" >

### System Design :
![diagram-export-5-6-2024-3_00_36-PM](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/cb875573-cfdf-4337-bb90-ad9983e6085e)

### UI ScreenShots
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/9d3666dc-cc42-433d-aa4d-bc3d927e5a08)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/76faf6b9-239c-42b4-8660-8962cf70907e)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/5234e850-a2ce-4716-a7d9-c2106fb57172)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/b16049cc-9edd-4b98-8c8c-10d43e4a197b)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/bdb85833-6480-43e5-8e55-45ea0f7d1d14)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/b799c847-f6c9-4e81-a17f-f9549e40ceed)
![image](https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/c7580b6a-c810-40d6-b46f-85871c1f29fd)


### Installation :
```bash
   git clone https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND.git
```
```bash
   npm i && cd apps/frontend
```
```bash
   npm i && cd ../../apps/backend
```
```bash
   npm i && cd ../../
```
```bash
   npm run dev
```
### Video Demo :
https://github.com/Aditya-Sakpal/GIGA_CHAT_FRONTEND/assets/112710558/3884b85f-785e-447a-9409-df8dcad906eb

