const leaderboardBody = document.querySelector('#leaderboard tbody');

// Example: Replace these arrays with the latest data each day
const prevData = [
    ['Prantik Ghosh', 'https://www.cloudskillsboost.google/public_profiles/295bacd3-1291-47bf-81c5-33ded97407d0', 1, 0, 1],
    ['SK SHAHIN REZA', 'https://www.cloudskillsboost.google/public_profiles/5ad39810-dfa6-4dbc-86d4-db7c8564b096', 0, 0, 0],
    ['Reezwan Hosen Khan', 'https://www.cloudskillsboost.google/public_profiles/9404c14f-ef1a-4c98-b033-03f9b2ce9323', 2, 0, 2],
    ['BHARATI MISHRA', 'https://www.cloudskillsboost.google/public_profiles/904635e0-d44e-4268-a801-a6fd6246f235', 1, 1, 2],
    ['Soumili Saha', 'https://www.cloudskillsboost.google/public_profiles/4c5fa9e8-0c5a-4f0f-8527-674f8f2d3db5', 4, 1, 5],
    ['Argha Mallick', 'https://www.cloudskillsboost.google/public_profiles/9e188756-9cf6-4bb8-9437-cea3a46bc9d5', 10, 2, 12],
    ['Ankita Das', 'https://www.cloudskillsboost.google/public_profiles/5964ef39-3836-4241-8694-c579a51e9639', 6, 1, 7],
    ['Ankita Giri', 'https://www.cloudskillsboost.google/public_profiles/66f2a361-71e3-4046-96c6-af300056f86b', 12, 1, 13],
    ['Sarthak Das', 'https://www.cloudskillsboost.google/public_profiles/24b28228-a92b-4920-8b83-d464c086423b', 4, 0, 4],
    ['SAGNEK CHOWDHURY', 'https://www.cloudskillsboost.google/public_profiles/67d7e1f6-833f-48ad-83ff-45a1c941c6f6', 5, 1, 6],
    ['Shreya Jha', 'https://www.cloudskillsboost.google/public_profiles/10d37830-bd7d-4250-b95f-fe85b5d6216a', 0, 1, 1],
    ['Rashmi Kumari', 'https://www.cloudskillsboost.google/public_profiles/89f8057d-8179-4470-ba7b-e99c2bb0181e', 3, 1, 4],
    ['DEBOPRIYA MULLICK', 'https://www.cloudskillsboost.google/public_profiles/d29675e5-73c4-4ac8-9416-b48d2f1f053d', 0, 0, 0],
    ['Suryanshu Paul', 'https://www.cloudskillsboost.google/public_profiles/23d2bced-5b40-4016-bc11-0cbc2cab6ef9', 7, 1, 8],
    ['Harsh Singh', 'https://www.cloudskillsboost.google/public_profiles/451d3e4e-4da7-43bd-b453-3d66cd208496', 2, 1, 3],
    ['Udita Sinha', 'https://www.cloudskillsboost.google/public_profiles/dd737e63-1cca-4204-82f1-a7f4fcea1cf5', 0, 0, 0],
    ['Akanksha kumari', 'https://www.cloudskillsboost.google/public_profiles/3bed1460-8bc0-4022-bad2-731e39beec59', 0, 0, 0],
    ['Subrata Bauri', 'https://www.cloudskillsboost.google/public_profiles/829bed1f-e32b-4f83-ad70-4b6e6f95dc93', 0, 0, 0],
    ['Arushmita Sikder', 'https://www.cloudskillsboost.google/public_profiles/e2df6f51-fe98-4fe6-96c3-6886efe80b5a', 0, 0, 0],
    ['Kuntal Mondal', 'https://www.cloudskillsboost.google/public_profiles/4e44836a-ab68-407f-8cdd-ba5a0f3df04f', 5, 0, 5],
    ['Ahan Sen', 'https://www.cloudskillsboost.google/public_profiles/5fb785f4-007e-4d86-a12f-faf83c457068', 0, 0, 0],
    ['Sougata Saha', 'https://www.cloudskillsboost.google/public_profiles/1fac2c6a-0f46-4edb-9d83-007624f138f9', 0, 0, 0],
    ['Riya Pathak', 'https://www.cloudskillsboost.google/public_profiles/13b6b7f1-da66-4840-b1ca-35820b29a669', 0, 0, 0],
    ['Harsh Agarwal', 'https://www.cloudskillsboost.google/public_profiles/0231e162-502e-4b6b-bf57-895b43465a68', 0, 0, 0],
    ['Subhradeep Basu', 'https://www.cloudskillsboost.google/public_profiles/271509d6-3249-4683-9311-289ff2ff9a16', 0, 0, 0],
    ['Maahi Agarwal', 'https://www.cloudskillsboost.google/public_profiles/5f0819d9-9f1f-4dca-964c-e5b750572a54', 0, 0, 0],
    ['Sanbrita Hazra', 'https://www.cloudskillsboost.google/public_profiles/7d511410-df17-4339-9ef5-319e4364b832', 0, 1, 1],
    ['Shreya Saha', 'https://www.cloudskillsboost.google/public_profiles/7cba23fc-d9e6-4c41-ac63-e8ea1b4ce545', 0, 0, 0],
    ['Sarbajit Ghosh', 'https://www.cloudskillsboost.google/public_profiles/e50159de-e01b-40a9-8438-10972317566e', 0, 0, 0],
    ['shubhradip saha', 'https://www.cloudskillsboost.google/public_profiles/3fb837f2-eb17-415b-afef-e5ea7720efeb', 0, 0, 0],
    ['Soumyadip paul', 'https://www.cloudskillsboost.google/public_profiles/72eb9c50-4068-4fbc-9a41-fe46c8a6a576', 0, 0, 0],
    ['Abhranil Ray', 'https://www.cloudskillsboost.google/public_profiles/a5bbfb1d-2ccb-49d6-9897-7b7c98d09c30', 0, 0, 0],
    ['Samima Nasrin', 'https://www.cloudskillsboost.google/public_profiles/767eed7b-c188-4412-991d-e074d09bbca1', 0, 0, 0],
    ['Apu Baidya', 'https://www.cloudskillsboost.google/public_profiles/96feac49-08b5-4a26-8b60-f89f613c0632', 0, 0, 0],
    ['Priya Rajak', 'https://www.cloudskillsboost.google/public_profiles/d772fa51-006c-4bfe-8ee1-5ea47e363578', 4, 0, 4],
    ['Debarjun Simlai', 'https://www.cloudskillsboost.google/public_profiles/0e5d3235-54b9-4df2-b2c8-d648b9d81495', 5, 1, 6],
    ['Gaurav Thakur', 'https://www.cloudskillsboost.google/public_profiles/7438841b-63e2-4e7f-a062-566ca535e3f1', 0, 0, 0],
    ['Arpan Pal', 'https://www.cloudskillsboost.google/public_profiles/d2ce80ba-bd0f-40c3-aa6d-b088da89b930', 0, 0, 0],
    ['Md Ashhab Raza', 'https://www.cloudskillsboost.google/public_profiles/13c7a7b6-d56e-4635-96cd-43a8f0588f93', 2, 1, 3],
    ['Snigdha Sadhu', 'https://www.cloudskillsboost.google/public_profiles/10298327-3614-4ccf-887b-3f57020b0cde', 10, 1, 11],
    ['Soumyajit Nandi', 'https://www.cloudskillsboost.google/public_profiles/c868ccd2-4a3f-47f8-a6f1-9fe7b0906775', 0, 1, 1],
    ['Meenakshi Sharma', 'https://www.cloudskillsboost.google/public_profiles/5d6b4703-1f53-4e95-a94b-252d6ffa7e53', 0, 0, 0],
    ['Bapan Banik', 'https://www.cloudskillsboost.google/public_profiles/233e5f9e-cb49-4a02-9d47-216ef3c579af', 2, 1, 3],
    ['Partha Goswami', 'https://www.cloudskillsboost.google/public_profiles/0f2003c6-c571-4509-90e5-84229d45f3c5', 0, 1, 1],
    ['Aaryan Kumar', 'https://www.cloudskillsboost.google/public_profiles/ccdddd2e-c1ee-4c53-932a-360cf02e6b78', 0, 0, 0],
    ['Ahana Maiti', 'https://www.cloudskillsboost.google/public_profiles/90f5ec3c-5fcf-4583-b8f4-17893dc6468e', 1, 1, 2],
    ['Soham Das', 'https://www.cloudskillsboost.google/public_profiles/259beb75-0076-4129-b2a4-c3157e062a44', 4, 1, 5],
    ['Bitanu poria', 'https://www.cloudskillsboost.google/public_profiles/ce43c7d2-55ce-4e1c-8939-30e091416b3f', 0, 0, 0],
    ['Sucheta Maity', 'https://www.cloudskillsboost.google/public_profiles/60b0abb6-f6d6-435f-836d-d5fb66f20cd5', 0, 0, 0],
    ['Ishita Mazumder', 'https://www.cloudskillsboost.google/public_profiles/faeb2682-5e4c-427b-9588-c282522aac4f', 0, 1, 1],
    ['Sanchita Mishra', 'https://www.cloudskillsboost.google/public_profiles/4500d655-dcc0-44e8-9303-345c65e53648', 0, 0, 0],
    ['Priti kumari', 'https://www.cloudskillsboost.google/public_profiles/cf1b5607-6d49-4929-b684-6489e716b9cf', 0, 0, 0],
    ['Madhu Singh', 'https://www.cloudskillsboost.google/public_profiles/82056a25-0129-49df-9384-bc444d6a0a2b', 0, 0, 0],
    ['Saba parween', 'https://www.cloudskillsboost.google/public_profiles/9a0f7994-46ef-45b2-8aee-b257f53c8b82', 0, 0, 0],
    ['Vivek Kumar', 'https://www.cloudskillsboost.google/public_profiles/389abd84-49f4-4cb7-b945-bcc4ac7e0ee2', 2, 1, 3],
    ['Basupriya Bakshi', 'https://www.cloudskillsboost.google/public_profiles/22c26361-df8d-4062-a8b2-85ca03a701ff', 15, 1, 16],
    ['Nandani Singh', 'https://www.cloudskillsboost.google/public_profiles/7d908231-ee32-424e-8021-d44f9874e285', 0, 0, 0],
    ['KINGSHUK ADHIKARI', 'https://www.cloudskillsboost.google/public_profiles/dd32a8fc-6a48-4349-86a0-092356188393', 15, 1, 16],
    ['Swastik Tarafdar', 'https://www.cloudskillsboost.google/public_profiles/d258bfff-10cc-44d1-9437-78c5e1403782', 0, 0, 0],
    ['Anshika', 'https://www.cloudskillsboost.google/public_profiles/dd7a6090-765a-4c6e-9898-7365-1f241dc1', 0, 0, 0],
    ['Ankit Narayan Prasad', 'https://www.cloudskillsboost.google/public_profiles/56c6b0c5-9c2b-4bc2-a03f-4255a6d326d6', 0, 0, 0],
    ['Deepak shaw', 'https://www.cloudskillsboost.google/public_profiles/4fb4df27-ab00-488c-bf74-54b6a9c6fa3c', 0, 1, 1],
    ['Animesh Pradhan', 'https://www.cloudskillsboost.google/public_profiles/9f3c1ba3-21ba-4db4-9e33-7cbb3ad1f5d1', 0, 0, 0],
    ['Ajoy Jana', 'https://www.cloudskillsboost.google/public_profiles/1c062ccc-10f6-4d2b-a333-57bcc2295f00', 1, 1, 2],
    ['Surajit Panda', 'https://www.cloudskillsboost.google/public_profiles/8f5cf361-cec0-48ae-9b0f-c36b4890b0d8', 0, 0, 0],
    ['Satyabrata rath', 'https://www.cloudskillsboost.google/public_profiles/de3c03ec-b316-47f7-ae15-429e04d0717a', 0, 0, 0],
    ['Nishikanta Panda', 'https://www.cloudskillsboost.google/public_profiles/53ebbdfd-c2ab-4037-85c6-95e0bc8a0792', 0, 0, 0],
    ['Amit Dey', 'https://www.cloudskillsboost.google/public_profiles/b1ba0f96-0a9f-4b90-95cd-edcfea67f8cb', 1, 1, 2],
    ['Rahul Das', 'https://www.cloudskillsboost.google/public_profiles/0ff362cd-1eee-42fb-bfba-cfa631cb485d', 0, 0, 0],
    ['Rajnil Saha', 'https://www.cloudskillsboost.google/public_profiles/7880e506-7de2-4ff4-995c-357644ddfc94', 0, 0, 0],
    ['Trisha Biswas', 'https://www.cloudskillsboost.google/public_profiles/1c7071cc-3650-4176-8e7a-a7b7115d138e', 1, 0, 1],
    ['Medha saha', 'https://www.cloudskillsboost.google/public_profiles/8a529cd2-e7ae-423a-8457-3be54f012cf7', 0, 0, 0],
    ['Ishika Datta', 'https://www.cloudskillsboost.google/public_profiles/6b162efb-0a48-44f3-a0e6-2eb28a43cdee', 0, 0, 0],
    ['Anwesha Maiti', 'https://www.cloudskillsboost.google/public_profiles/8ab59729-7a66-4141-946e-695b8b80d8a3', 1, 1, 2],
    ['Subhadip Guchhait', 'https://www.cloudskillsboost.google/public_profiles/756440b7-32ab-4a32-a45a-e9a2110c3b95', 15, 1, 16],
    ['Md Tabrez Shamim', 'https://www.cloudskillsboost.google/public_profiles/d3529b4e-7bea-4ba5-bab4-e5967b7b0a6f', 0, 0, 0],
    ['Ayan Pramanik', 'https://www.cloudskillsboost.google/public_profiles/b93ebb09-9b67-40da-9bdd-6ffd134ebc50', 0, 0, 0],
    ['Ritesh Saw', 'https://www.cloudskillsboost.google/public_profiles/938b3021-1cd6-4de8-97f6-09072905f764', 3, 0, 3],
    ['Anuska Saha', 'https://www.cloudskillsboost.google/public_profiles/4dd7402e-12a4-4484-9919-de71d6cba55b', 11, 1, 12],
    ['AHED KHAN', 'https://www.cloudskillsboost.google/public_profiles/5e905a7b-a417-480d-82d4-5b37de268eba', 0, 0, 0],
    ['Surajit Pahari', 'https://www.cloudskillsboost.google/public_profiles/fb504b84-c077-469b-b237-1efa1f3cd338', 15, 1, 16],
    ['Subahdeep Paul', 'https://www.cloudskillsboost.google/public_profiles/3e6096e4-35ce-48f6-a9a4-2cc886d51255', 8, 0, 8],
    ['Sayantani', 'https://www.cloudskillsboost.google/public_profiles/bdabb1c0-324c-49b0-86c9-c531048e73b3', 13, 0, 13],
    ['Navoneel Dey', 'https://www.cloudskillsboost.google/public_profiles/16cb26f2-8434-4b86-bb4b-ec851581319b', 10, 1, 11],
    ['Vashishsdh T R', 'https://www.cloudskillsboost.google/public_profiles/9fde66fd-d961-44d4-ae57-70aa810f0c36', 0, 1, 1],
    ['Vivek Kumar', 'https://www.cloudskillsboost.google/public_profiles/b338d101-a764-4c2c-9ff0-af1874599287', 15, 2, 17],
    ['Rakesh De', 'https://www.cloudskillsboost.google/public_profiles/1294bf22-0bd5-48ef-bf29-29c52490cbd7', 0, 0, 0],
    ['Sujal Agarwal', 'https://www.cloudskillsboost.google/public_profiles/08a40592-af37-4f21-8e3b-3c0bc0010570', 0, 0, 0],
    ['Asad Imam', 'https://www.cloudskillsboost.google/public_profiles/969bb6de-70b8-404f-83d2-63126af39381', 0, 0, 0],
    ['Srijan Sasmal', 'https://www.cloudskillsboost.google/public_profiles/71141df5-4dac-49d1-b8de-1cc32ded233d', 5, 0, 5],
    ['Durgaprasad Ranjit', 'https://www.cloudskillsboost.google/public_profiles/d32ce92c-f528-4723-b7b8-93522a6cb54c', 1, 0, 1],
    ['Soumyajit Chowdhury', 'https://www.cloudskillsboost.google/public_profiles/e8e193f5-0f4d-4101-a6a7-d3881d10b996', 9, 0, 9],
    ['Snehashis Guin', 'https://www.cloudskillsboost.google/public_profiles/f8e930c1-fc93-4324-879b-81aaa7f8f34e', 5, 1, 6],
    ['Susnigdha Mondal', 'https://www.cloudskillsboost.google/public_profiles/1a6bafa0-40e1-4767-95a3-08d9688370f4', 0, 0, 0],
    ['Sayan Kangsa Banik', 'https://www.cloudskillsboost.google/public_profiles/d2274db0-8357-40fc-92e9-c41ffb1e9373', 0, 1, 1],
    ['Md Zaid', 'https://www.cloudskillsboost.google/public_profiles/72c30385-cb95-4d10-8d9b-89d2df1b2e4e', 1, 1, 2],
    ['Sreejita Sarkar', 'https://www.cloudskillsboost.google/public_profiles/49097c0b-8788-4e2e-82e7-7d7e70f891df', 0, 0, 0],
    ['ABHISHEK KUMAR GIRI', 'https://www.cloudskillsboost.google/public_profiles/4a259b90-5165-470a-a89a-1b180f0e7110', 12, 1, 13],
    ['Dipti Priya', 'https://www.cloudskillsboost.google/public_profiles/340ea08a-960a-483a-9f9d-d0f950f4986c', 0, 0, 0],
    ['Devashi', 'https://www.cloudskillsboost.google/public_profiles/8a849696-14d6-43ef-acbb-b87cb5680c77', 0, 0, 0],
    ['Md. Kamran Alam', 'https://www.cloudskillsboost.google/public_profiles/145349cf-afd0-45eb-850d-f530e7376708', 0, 0, 0],
    ['ARPITA GUPTA', 'https://www.cloudskillsboost.google/public_profiles/8fd3ee9d-f43d-42d8-ba54-700fe82173fa', 0, 1, 1],
    ['SAHIL BISWAS', 'https://www.cloudskillsboost.google/public_profiles/fef52d0f-c6f6-4416-820a-0bd7dde15777', 0, 0, 0],
    ['Parambrata Adhikari', 'https://www.cloudskillsboost.google/public_profiles/12968621-5990-447c-8424-fecc6a5da464', 0, 0, 0],
    ['Samprit Majumdar', 'https://www.cloudskillsboost.google/public_profiles/6b761a21-3002-4c82-a175-ce8b4c1143c9', 5, 1, 6],
    ['Sagar Guchhait', 'https://www.cloudskillsboost.google/public_profiles/c9d3ec8c-572c-4c32-8236-8414bce8fab2', 15, 1, 16],
    ['Krishna Agarwal', 'https://www.cloudskillsboost.google/public_profiles/04062841-ce5b-4ed4-b192-02ede2035fba', 12, 1, 13],
    ['Dhrubatara Mandal', 'https://www.cloudskillsboost.google/public_profiles/60b29791-845d-4fc4-bfdb-da69c6aa47f1', 0, 1, 1],
    ['SHRISTI SRIVASTAVA', 'https://www.cloudskillsboost.google/public_profiles/0e81169e-9881-40f5-9544-c285e5033d36', 3, 1, 4],
    ['Shristi singh', 'https://www.cloudskillsboost.google/public_profiles/b2cf5189-464b-476d-b5b2-60ca9aa9bc48', 0, 0, 0],
    ['Arijit Roy', 'https://www.cloudskillsboost.google/public_profiles/43d50dee-f1ac-4fc4-84b5-ba7ee438fd02', 0, 1, 1],
    ['Shreyanka Satpathy', 'https://www.cloudskillsboost.google/public_profiles/ff93ca74-3d31-41f1-85a5-91498f55cf8f', 0, 0, 0],
    ['Raktik Ghosh', 'https://www.cloudskillsboost.google/public_profiles/ba0d94b4-c2c7-45c9-8a78-85f24cd2c03a', 0, 0, 0],
    ['Misbaah Aymaan', 'https://www.cloudskillsboost.google/public_profiles/2c695f57-1ea4-4430-8520-ce90f49abb72', 0, 1, 1],
    ['Sagnik Saha', 'https://www.cloudskillsboost.google/public_profiles/4ae86038-1539-460c-888b-4e01a6d0884e', 0, 1, 1],
    ['Aadipto Ghosh', 'https://www.cloudskillsboost.google/public_profiles/24857996-8e74-4cb4-b4ff-3ab6ec8d5d87', 2, 1, 3],
    ['Insha hossain', 'https://www.cloudskillsboost.google/public_profiles/aa028d8c-d125-4c57-bb63-c6b9cdef17d0', 10, 1, 11],
    ['AAYUSH MISHRA', 'https://www.cloudskillsboost.google/public_profiles/9418be94-b88d-4b81-b73b-6e4135ac44e4', 0, 0, 0],
    ['ANIKET DAS', 'https://www.cloudskillsboost.google/public_profiles/a3184ca4-cea2-4329-a4cc-a0a84b4c20af', 0, 1, 1],
    ['Danyal Ali', 'https://www.cloudskillsboost.google/public_profiles/a467b1fa-7bec-491c-8284-0608a1d361e9', 0, 0, 0],
    ['Abdul Razzak', 'https://www.cloudskillsboost.google/public_profiles/9088eb65-322c-482e-b9c6-267ed9034e79', 5, 1, 6],
    ['Tushar Sharma', 'https://www.cloudskillsboost.google/public_profiles/af25303b-417d-40fa-be45-2900b983a045', 1, 0, 1],
    ['Sukanya Sarkar', 'https://www.cloudskillsboost.google/public_profiles/84abc386-c92e-466c-8876-baab90c80387', 1, 1, 2],
    ['Ayantika Das', 'https://www.cloudskillsboost.google/public_profiles/74a4c554-5334-4ab8-85f6-149108f899f2', 12, 1, 13],
    ['Pritam Tarafdar', 'https://www.cloudskillsboost.google/public_profiles/077f083b-50c4-4833-9e1e-591993a6332e', 0, 0, 0],
    ['Manish kumar', 'https://www.cloudskillsboost.google/public_profiles/5ba5355f-7d73-4994-912e-eaf42b0841bb', 0, 0, 0],
    ['Priyam Mondal', 'https://www.cloudskillsboost.google/public_profiles/bf7c3386-1ad7-4720-8e17-8e932c9d24bb', 3, 1, 4],
    ['Ajit Pradhan', 'https://www.cloudskillsboost.google/public_profiles/d12a1bf1-ab5f-49c0-a508-44cf8715db8a', 0, 0, 0],
    ['Aniket Pradhan', 'https://www.cloudskillsboost.google/public_profiles/e5f3713f-4165-4c97-8c80-e091977becd2', 0, 0, 0],
    ['Souvik Pradhan', 'https://www.cloudskillsboost.google/public_profiles/b2938392-c96e-4890-a88f-c9d39a4b2412', 0, 0, 0],
    ['Arghya Mallik', 'https://www.cloudskillsboost.google/public_profiles/67f3e758-a3cf-4948-9b3f-1c1b98d03c4c', 0, 1, 1],
    ['Sayan Pradhan', 'https://www.cloudskillsboost.google/public_profiles/b14be9d2-711c-4be9-a13d-c9a98bfa226a', 0, 0, 0],
    ['Munna Pradhan', 'https://www.cloudskillsboost.google/public_profiles/111bedc9-ea16-4dda-b291-fe8fb99eaede', 0, 0, 0],
    ['Amit Pradhan', 'https://www.cloudskillsboost.google/public_profiles/41857215-8153-4a0d-952c-b53966e4b08a', 0, 0, 0],
    ['Anup Pradhan', 'https://www.cloudskillsboost.google/public_profiles/8d090235-819a-43a1-8e14-15e986c92ac5', 0, 0, 0]
];

const todayData = [
    ['Prantik Ghosh', 'https://www.cloudskillsboost.google/public_profiles/295bacd3-1291-47bf-81c5-33ded97407d0', 1, 0, 1],
    ['SK SHAHIN REZA', 'https://www.cloudskillsboost.google/public_profiles/5ad39810-dfa6-4dbc-86d4-db7c8564b096', 0, 0, 0],
    ['Reezwan Hosen Khan', 'https://www.cloudskillsboost.google/public_profiles/9404c14f-ef1a-4c98-b033-03f9b2ce9323', 2, 0, 2],
    ['BHARATI MISHRA', 'https://www.cloudskillsboost.google/public_profiles/904635e0-d44e-4268-a801-a6fd6246f235', 1, 1, 2],
    ['Soumili Saha', 'https://www.cloudskillsboost.google/public_profiles/4c5fa9e8-0c5a-4f0f-8527-674f8f2d3db5', 4, 1, 5],
    ['Argha Mallick', 'https://www.cloudskillsboost.google/public_profiles/9e188756-9cf6-4bb8-9437-cea3a46bc9d5', 13, 2, 15],
    ['Ankita Das', 'https://www.cloudskillsboost.google/public_profiles/5964ef39-3836-4241-8694-c579a51e9639', 6, 1, 7],
    ['Ankita Giri', 'https://www.cloudskillsboost.google/public_profiles/66f2a361-71e3-4046-96c6-af300056f86b', 13, 1, 14],
    ['Sarthak Das', 'https://www.cloudskillsboost.google/public_profiles/24b28228-a92b-4920-8b83-d464c086423b', 6, 0, 6],
    ['SAGNEK CHOWDHURY', 'https://www.cloudskillsboost.google/public_profiles/67d7e1f6-833f-48ad-83ff-45a1c941c6f6', 7, 1, 8],
    ['Shreya Jha', 'https://www.cloudskillsboost.google/public_profiles/10d37830-bd7d-4250-b95f-fe85b5d6216a', 0, 1, 1],
    ['Rashmi Kumari', 'https://www.cloudskillsboost.google/public_profiles/89f8057d-8179-4470-ba7b-e99c2bb0181e', 3, 1, 4],
    ['DEBOPRIYA MULLICK', 'https://www.cloudskillsboost.google/public_profiles/d29675e5-73c4-4ac8-9416-b48d2f1f053d', 0, 0, 0],
    ['Suryanshu Paul', 'https://www.cloudskillsboost.google/public_profiles/23d2bced-5b40-4016-bc11-0cbc2cab6ef9', 8, 1, 9],
    ['Harsh Singh', 'https://www.cloudskillsboost.google/public_profiles/451d3e4e-4da7-43bd-b453-3d66cd208496', 4, 1, 5],
    ['Udita Sinha', 'https://www.cloudskillsboost.google/public_profiles/dd737e63-1cca-4204-82f1-a7f4fcea1cf5', 0, 0, 0],
    ['Akanksha kumari', 'https://www.cloudskillsboost.google/public_profiles/3bed1460-8bc0-4022-bad2-731e39beec59', 0, 0, 0],
    ['Subrata Bauri', 'https://www.cloudskillsboost.google/public_profiles/829bed1f-e32b-4f83-ad70-4b6e6f95dc93', 0, 0, 0],
    ['Arushmita Sikder', 'https://www.cloudskillsboost.google/public_profiles/e2df6f51-fe98-4fe6-96c3-6886efe80b5a', 0, 0, 0],
    ['Kuntal Mondal', 'https://www.cloudskillsboost.google/public_profiles/4e44836a-ab68-407f-8cdd-ba5a0f3df04f', 5, 0, 5],
    ['Ahan Sen', 'https://www.cloudskillsboost.google/public_profiles/5fb785f4-007e-4d86-a12f-faf83c457068', 0, 0, 0],
    ['Sougata Saha', 'https://www.cloudskillsboost.google/public_profiles/1fac2c6a-0f46-4edb-9d83-007624f138f9', 0, 0, 0],
    ['Riya Pathak', 'https://www.cloudskillsboost.google/public_profiles/13b6b7f1-da66-4840-b1ca-35820b29a669', 0, 0, 0],
    ['Harsh Agarwal', 'https://www.cloudskillsboost.google/public_profiles/0231e162-502e-4b6b-bf57-895b43465a68', 0, 0, 0],
    ['Subhradeep Basu', 'https://www.cloudskillsboost.google/public_profiles/271509d6-3249-4683-9311-289ff2ff9a16', 0, 0, 0],
    ['Maahi Agarwal', 'https://www.cloudskillsboost.google/public_profiles/5f0819d9-9f1f-4dca-964c-e5b750572a54', 0, 0, 0],
    ['Sanbrita Hazra', 'https://www.cloudskillsboost.google/public_profiles/7d511410-df17-4339-9ef5-319e4364b832', 1, 1, 2],
    ['Shreya Saha', 'https://www.cloudskillsboost.google/public_profiles/7cba23fc-d9e6-4c41-ac63-e8ea1b4ce545', 0, 0, 0],
    ['Sarbajit Ghosh', 'https://www.cloudskillsboost.google/public_profiles/e50159de-e01b-40a9-8438-10972317566e', 0, 0, 0],
    ['shubhradip saha', 'https://www.cloudskillsboost.google/public_profiles/3fb837f2-eb17-415b-afef-e5ea7720efeb', 0, 0, 0],
    ['Soumyadip paul', 'https://www.cloudskillsboost.google/public_profiles/72eb9c50-4068-4fbc-9a41-fe46c8a6a576', 0, 0, 0],
    ['Abhranil Ray', 'https://www.cloudskillsboost.google/public_profiles/a5bbfb1d-2ccb-49d6-9897-7b7c98d09c30', 0, 0, 0],
    ['Samima Nasrin', 'https://www.cloudskillsboost.google/public_profiles/767eed7b-c188-4412-991d-e074d09bbca1', 0, 0, 0],
    ['Apu Baidya', 'https://www.cloudskillsboost.google/public_profiles/96feac49-08b5-4a26-8b60-f89f613c0632', 0, 0, 0],
    ['Priya Rajak', 'https://www.cloudskillsboost.google/public_profiles/d772fa51-006c-4bfe-8ee1-5ea47e363578', 4, 0, 4],
    ['Debarjun Simlai', 'https://www.cloudskillsboost.google/public_profiles/0e5d3235-54b9-4df2-b2c8-d648b9d81495', 5, 1, 6],
    ['Gaurav Thakur', 'https://www.cloudskillsboost.google/public_profiles/7438841b-63e2-4e7f-a062-566ca535e3f1', 0, 0, 0],
    ['Arpan Pal', 'https://www.cloudskillsboost.google/public_profiles/d2ce80ba-bd0f-40c3-aa6d-b088da89b930', 0, 0, 0],
    ['Md Ashhab Raza', 'https://www.cloudskillsboost.google/public_profiles/13c7a7b6-d56e-4635-96cd-43a8f0588f93', 2, 1, 3],
    ['Snigdha Sadhu', 'https://www.cloudskillsboost.google/public_profiles/10298327-3614-4ccf-887b-3f57020b0cde', 12, 1, 13],
    ['Soumyajit Nandi', 'https://www.cloudskillsboost.google/public_profiles/c868ccd2-4a3f-47f8-a6f1-9fe7b0906775', 0, 1, 1],
    ['Meenakshi Sharma', 'https://www.cloudskillsboost.google/public_profiles/5d6b4703-1f53-4e95-a94b-252d6ffa7e53', 0, 0, 0],
    ['Bapan Banik', 'https://www.cloudskillsboost.google/public_profiles/233e5f9e-cb49-4a02-9d47-216ef3c579af', 2, 1, 3],
    ['Partha Goswami', 'https://www.cloudskillsboost.google/public_profiles/0f2003c6-c571-4509-90e5-84229d45f3c5', 0, 1, 1],
    ['Aaryan Kumar', 'https://www.cloudskillsboost.google/public_profiles/ccdddd2e-c1ee-4c53-932a-360cf02e6b78', 0, 0, 0],
    ['Ahana Maiti', 'https://www.cloudskillsboost.google/public_profiles/90f5ec3c-5fcf-4583-b8f4-17893dc6468e', 2, 1, 3],
    ['Soham Das', 'https://www.cloudskillsboost.google/public_profiles/259beb75-0076-4129-b2a4-c3157e062a44', 4, 1, 5],
    ['Bitanu poria', 'https://www.cloudskillsboost.google/public_profiles/ce43c7d2-55ce-4e1c-8939-30e091416b3f', 0, 0, 0],
    ['Sucheta Maity', 'https://www.cloudskillsboost.google/public_profiles/60b0abb6-f6d6-435f-836d-d5fb66f20cd5', 0, 0, 0],
    ['Ishita Mazumder', 'https://www.cloudskillsboost.google/public_profiles/faeb2682-5e4c-427b-9588-c282522aac4f', 0, 1, 1],
    ['Sanchita Mishra', 'https://www.cloudskillsboost.google/public_profiles/4500d655-dcc0-44e8-9303-345c65e53648', 0, 0, 0],
    ['Priti kumari', 'https://www.cloudskillsboost.google/public_profiles/cf1b5607-6d49-4929-b684-6489e716b9cf', 0, 0, 0],
    ['Madhu Singh', 'https://www.cloudskillsboost.google/public_profiles/82056a25-0129-49df-9384-bc444d6a0a2b', 0, 0, 0],
    ['Saba parween', 'https://www.cloudskillsboost.google/public_profiles/9a0f7994-46ef-45b2-8aee-b257f53c8b82', 0, 0, 0],
    ['Vivek Kumar', 'https://www.cloudskillsboost.google/public_profiles/389abd84-49f4-4cb7-b945-bcc4ac7e0ee2', 2, 1, 3],
    ['Basupriya Bakshi', 'https://www.cloudskillsboost.google/public_profiles/22c26361-df8d-4062-a8b2-85ca03a701ff', 15, 1, 16],
    ['Nandani Singh', 'https://www.cloudskillsboost.google/public_profiles/7d908231-ee32-424e-8021-d44f9874e285', 0, 0, 0],
    ['KINGSHUK ADHIKARI', 'https://www.cloudskillsboost.google/public_profiles/dd32a8fc-6a48-4349-86a0-092356188393', 15, 2, 17],
    ['Swastik Tarafdar', 'https://www.cloudskillsboost.google/public_profiles/d258bfff-10cc-44d1-9437-78c5e1403782', 0, 0, 0],
    ['Anshika', 'https://www.cloudskillsboost.google/public_profiles/dd7a6090-765a-4c6e-9898-7365-1f241dc1', 0, 0, 0],
    ['Ankit Narayan Prasad', 'https://www.cloudskillsboost.google/public_profiles/56c6b0c5-9c2b-4bc2-a03f-4255a6d326d6', 0, 0, 0],
    ['Deepak shaw', 'https://www.cloudskillsboost.google/public_profiles/4fb4df27-ab00-488c-bf74-54b6a9c6fa3c', 0, 1, 1],
    ['Animesh Pradhan', 'https://www.cloudskillsboost.google/public_profiles/9f3c1ba3-21ba-4db4-9e33-7cbb3ad1f5d1', 0, 0, 0],
    ['Ajoy Jana', 'https://www.cloudskillsboost.google/public_profiles/1c062ccc-10f6-4d2b-a333-57bcc2295f00', 1, 1, 2],
    ['Surajit Panda', 'https://www.cloudskillsboost.google/public_profiles/8f5cf361-cec0-48ae-9b0f-c36b4890b0d8', 0, 0, 0],
    ['Satyabrata rath', 'https://www.cloudskillsboost.google/public_profiles/de3c03ec-b316-47f7-ae15-429e04d0717a', 0, 0, 0],
    ['Nishikanta Panda', 'https://www.cloudskillsboost.google/public_profiles/53ebbdfd-c2ab-4037-85c6-95e0bc8a0792', 0, 0, 0],
    ['Amit Dey', 'https://www.cloudskillsboost.google/public_profiles/b1ba0f96-0a9f-4b90-95cd-edcfea67f8cb', 1, 1, 2],
    ['Rahul Das', 'https://www.cloudskillsboost.google/public_profiles/0ff362cd-1eee-42fb-bfba-cfa631cb485d', 0, 0, 0],
    ['Rajnil Saha', 'https://www.cloudskillsboost.google/public_profiles/7880e506-7de2-4ff4-995c-357644ddfc94', 0, 0, 0],
    ['Trisha Biswas', 'https://www.cloudskillsboost.google/public_profiles/1c7071cc-3650-4176-8e7a-a7b7115d138e', 1, 0, 1],
    ['Medha saha', 'https://www.cloudskillsboost.google/public_profiles/8a529cd2-e7ae-423a-8457-3be54f012cf7', 0, 0, 0],
    ['Ishika Datta', 'https://www.cloudskillsboost.google/public_profiles/6b162efb-0a48-44f3-a0e6-2eb28a43cdee', 0, 0, 0],
    ['Anwesha Maiti', 'https://www.cloudskillsboost.google/public_profiles/8ab59729-7a66-4141-946e-695b8b80d8a3', 1, 1, 2],
    ['Subhadip Guchhait', 'https://www.cloudskillsboost.google/public_profiles/756440b7-32ab-4a32-a45a-e9a2110c3b95', 15, 1, 16],
    ['Md Tabrez Shamim', 'https://www.cloudskillsboost.google/public_profiles/d3529b4e-7bea-4ba5-bab4-e5967b7b0a6f', 0, 0, 0],
    ['Ayan Pramanik', 'https://www.cloudskillsboost.google/public_profiles/b93ebb09-9b67-40da-9bdd-6ffd134ebc50', 0, 0, 0],
    ['Ritesh Saw', 'https://www.cloudskillsboost.google/public_profiles/938b3021-1cd6-4de8-97f6-09072905f764', 3, 0, 3],
    ['Anuska Saha', 'https://www.cloudskillsboost.google/public_profiles/4dd7402e-12a4-4484-9919-de71d6cba55b', 13, 1, 14],
    ['AHED KHAN', 'https://www.cloudskillsboost.google/public_profiles/5e905a7b-a417-480d-82d4-5b37de268eba', 0, 0, 0],
    ['Surajit Pahari', 'https://www.cloudskillsboost.google/public_profiles/fb504b84-c077-469b-b237-1efa1f3cd338', 15, 1, 16],
    ['Subahdeep Paul', 'https://www.cloudskillsboost.google/public_profiles/3e6096e4-35ce-48f6-a9a4-2cc886d51255', 8, 0, 8],
    ['Sayantani', 'https://www.cloudskillsboost.google/public_profiles/bdabb1c0-324c-49b0-86c9-c531048e73b3', 14, 0, 14],
    ['Navoneel Dey', 'https://www.cloudskillsboost.google/public_profiles/16cb26f2-8434-4b86-bb4b-ec851581319b', 10, 1, 11],
    ['Vashishsdh T R', 'https://www.cloudskillsboost.google/public_profiles/9fde66fd-d961-44d4-ae57-70aa810f0c36', 0, 1, 1],
    ['Vivek Kumar', 'https://www.cloudskillsboost.google/public_profiles/b338d101-a764-4c2c-9ff0-af1874599287', 15, 2, 17],
    ['Rakesh De', 'https://www.cloudskillsboost.google/public_profiles/1294bf22-0bd5-48ef-bf29-29c52490cbd7', 0, 0, 0],
    ['Sujal Agarwal', 'https://www.cloudskillsboost.google/public_profiles/08a40592-af37-4f21-8e3b-3c0bc0010570', 0, 0, 0],
    ['Asad Imam', 'https://www.cloudskillsboost.google/public_profiles/969bb6de-70b8-404f-83d2-63126af39381', 0, 0, 0],
    ['Srijan Sasmal', 'https://www.cloudskillsboost.google/public_profiles/71141df5-4dac-49d1-b8de-1cc32ded233d', 5, 0, 5],
    ['Durgaprasad Ranjit', 'https://www.cloudskillsboost.google/public_profiles/d32ce92c-f528-4723-b7b8-93522a6cb54c', 1, 0, 1],
    ['Soumyajit Chowdhury', 'https://www.cloudskillsboost.google/public_profiles/e8e193f5-0f4d-4101-a6a7-d3881d10b996', 9, 0, 9],
    ['Snehashis Guin', 'https://www.cloudskillsboost.google/public_profiles/f8e930c1-fc93-4324-879b-81aaa7f8f34e', 5, 1, 6],
    ['Susnigdha Mondal', 'https://www.cloudskillsboost.google/public_profiles/1a6bafa0-40e1-4767-95a3-08d9688370f4', 0, 0, 0],
    ['Sayan Kangsa Banik', 'https://www.cloudskillsboost.google/public_profiles/d2274db0-8357-40fc-92e9-c41ffb1e9373', 0, 1, 1],
    ['Md Zaid', 'https://www.cloudskillsboost.google/public_profiles/72c30385-cb95-4d10-8d9b-89d2df1b2e4e', 1, 1, 2],
    ['Sreejita Sarkar', 'https://www.cloudskillsboost.google/public_profiles/49097c0b-8788-4e2e-82e7-7d7e70f891df', 0, 0, 0],
    ['ABHISHEK KUMAR GIRI', 'https://www.cloudskillsboost.google/public_profiles/4a259b90-5165-470a-a89a-1b180f0e7110', 12, 1, 13],
    ['Dipti Priya', 'https://www.cloudskillsboost.google/public_profiles/340ea08a-960a-483a-9f9d-d0f950f4986c', 0, 0, 0],
    ['Devashi', 'https://www.cloudskillsboost.google/public_profiles/8a849696-14d6-43ef-acbb-b87cb5680c77', 0, 0, 0],
    ['Md. Kamran Alam', 'https://www.cloudskillsboost.google/public_profiles/145349cf-afd0-45eb-850d-f530e7376708', 0, 0, 0],
    ['ARPITA GUPTA', 'https://www.cloudskillsboost.google/public_profiles/8fd3ee9d-f43d-42d8-ba54-700fe82173fa', 1, 1, 2],
    ['SAHIL BISWAS', 'https://www.cloudskillsboost.google/public_profiles/fef52d0f-c6f6-4416-820a-0bd7dde15777', 0, 0, 0],
    ['Parambrata Adhikari', 'https://www.cloudskillsboost.google/public_profiles/12968621-5990-447c-8424-fecc6a5da464', 0, 0, 0],
    ['Samprit Majumdar', 'https://www.cloudskillsboost.google/public_profiles/6b761a21-3002-4c82-a175-ce8b4c1143c9', 5, 1, 6],
    ['Sagar Guchhait', 'https://www.cloudskillsboost.google/public_profiles/c9d3ec8c-572c-4c32-8236-8414bce8fab2', 15, 1, 16],
    ['Krishna Agarwal', 'https://www.cloudskillsboost.google/public_profiles/04062841-ce5b-4ed4-b192-02ede2035fba', 12, 1, 13],
    ['Dhrubatara Mandal', 'https://www.cloudskillsboost.google/public_profiles/60b29791-845d-4fc4-bfdb-da69c6aa47f1', 0, 1, 1],
    ['SHRISTI SRIVASTAVA', 'https://www.cloudskillsboost.google/public_profiles/0e81169e-9881-40f5-9544-c285e5033d36', 3, 1, 4],
    ['Shristi singh', 'https://www.cloudskillsboost.google/public_profiles/b2cf5189-464b-476d-b5b2-60ca9aa9bc48', 0, 0, 0],
    ['Arijit Roy', 'https://www.cloudskillsboost.google/public_profiles/43d50dee-f1ac-4fc4-84b5-ba7ee438fd02', 0, 1, 1],
    ['Shreyanka Satpathy', 'https://www.cloudskillsboost.google/public_profiles/ff93ca74-3d31-41f1-85a5-91498f55cf8f', 0, 0, 0],
    ['Raktik Ghosh', 'https://www.cloudskillsboost.google/public_profiles/ba0d94b4-c2c7-45c9-8a78-85f24cd2c03a', 0, 0, 0],
    ['Misbaah Aymaan', 'https://www.cloudskillsboost.google/public_profiles/2c695f57-1ea4-4430-8520-ce90f49abb72', 0, 1, 1],
    ['Sagnik Saha', 'https://www.cloudskillsboost.google/public_profiles/4ae86038-1539-460c-888b-4e01a6d0884e', 0, 1, 1],
    ['Aadipto Ghosh', 'https://www.cloudskillsboost.google/public_profiles/24857996-8e74-4cb4-b4ff-3ab6ec8d5d87', 4, 1, 5],
    ['Insha hossain', 'https://www.cloudskillsboost.google/public_profiles/aa028d8c-d125-4c57-bb63-c6b9cdef17d0', 12, 1, 13],
    ['AAYUSH MISHRA', 'https://www.cloudskillsboost.google/public_profiles/9418be94-b88d-4b81-b73b-6e4135ac44e4', 0, 0, 0],
    ['ANIKET DAS', 'https://www.cloudskillsboost.google/public_profiles/a3184ca4-cea2-4329-a4cc-a0a84b4c20af', 2, 1, 3],
    ['Danyal Ali', 'https://www.cloudskillsboost.google/public_profiles/a467b1fa-7bec-491c-8284-0608a1d361e9', 0, 0, 0],
    ['Abdul Razzak', 'https://www.cloudskillsboost.google/public_profiles/9088eb65-322c-482e-b9c6-267ed9034e79', 5, 1, 6],
    ['Tushar Sharma', 'https://www.cloudskillsboost.google/public_profiles/af25303b-417d-40fa-be45-2900b983a045', 1, 0, 1],
    ['Sukanya Sarkar', 'https://www.cloudskillsboost.google/public_profiles/84abc386-c92e-466c-8876-baab90c80387', 2, 1, 3],
    ['Ayantika Das', 'https://www.cloudskillsboost.google/public_profiles/74a4c554-5334-4ab8-85f6-149108f899f2', 12, 1, 13],
    ['Pritam Tarafdar', 'https://www.cloudskillsboost.google/public_profiles/077f083b-50c4-4833-9e1e-591993a6332e', 0, 0, 0],
    ['Manish kumar', 'https://www.cloudskillsboost.google/public_profiles/5ba5355f-7d73-4994-912e-eaf42b0841bb', 0, 0, 0],
    ['Priyam Mondal', 'https://www.cloudskillsboost.google/public_profiles/bf7c3386-1ad7-4720-8e17-8e932c9d24bb', 3, 1, 4],
    ['Ajit Pradhan', 'https://www.cloudskillsboost.google/public_profiles/d12a1bf1-ab5f-49c0-a508-44cf8715db8a', 0, 0, 0],
    ['Aniket Pradhan', 'https://www.cloudskillsboost.google/public_profiles/e5f3713f-4165-4c97-8c80-e091977becd2', 0, 0, 0],
    ['Souvik Pradhan', 'https://www.cloudskillsboost.google/public_profiles/b2938392-c96e-4890-a88f-c9d39a4b2412', 0, 0, 0],
    ['Arghya Mallik', 'https://www.cloudskillsboost.google/public_profiles/67f3e758-a3cf-4948-9b3f-1c1b98d03c4c', 0, 1, 1],
    ['Sayan Pradhan', 'https://www.cloudskillsboost.google/public_profiles/b14be9d2-711c-4be9-a13d-c9a98bfa226a', 0, 0, 0],
    ['Munna Pradhan', 'https://www.cloudskillsboost.google/public_profiles/111bedc9-ea16-4dda-b291-fe8fb99eaede', 0, 0, 0],
    ['Amit Pradhan', 'https://www.cloudskillsboost.google/public_profiles/41857215-8153-4a0d-952c-b53966e4b08a', 0, 0, 0],
    ['Anup Pradhan', 'https://www.cloudskillsboost.google/public_profiles/8d090235-819a-43a1-8e14-15e986c92ac5', 0, 0, 0]
];

// Function to convert a name to title case
function toTitleCase(str) {
    return str
        .toLowerCase() // Convert to lower case
        .split(' ')    // Split into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
        .join(' ');    // Join back into a string
}

// Convert raw array data into objects for easier processing
function convertToObjects(dataArray) {
    return dataArray.map(entry => ({
        name: toTitleCase(entry[0]), // Convert name to title case
        profileUrl: entry[1],
        skillBadges: parseInt(entry[2]),
        arcadeGames: parseInt(entry[3]),
        totalBadges: parseInt(entry[2]) + parseInt(entry[3])
    }));
}

// Merge and update the leaderboard
function updateLeaderboard(prevData, todayData) {
    const prevObjects = convertToObjects(prevData);
    const todayObjects = convertToObjects(todayData);

    // Merge today's data with previous data
    todayObjects.forEach(entry => {
        const existing = prevObjects.find(e => e.profileUrl === entry.profileUrl);
        if (existing) {
            // Update badge counts if found in previous data
            existing.skillBadges = Math.max(existing.skillBadges, entry.skillBadges);
            existing.arcadeGames = Math.max(existing.arcadeGames, entry.arcadeGames);
            existing.totalBadges = existing.skillBadges + existing.arcadeGames;
        } else {
            // Add new entry to the leaderboard
            prevObjects.push(entry);
        }
    });

    // Sort entries: First those with 16 badges, then by total badges descending
    prevObjects.sort((a, b) => {
        if (a.totalBadges === 16 && b.totalBadges !== 16) return -1;
        if (a.totalBadges !== 16 && b.totalBadges === 16) return 1;
        return b.totalBadges - a.totalBadges;
    });

    // Render the leaderboard
    renderLeaderboard(prevObjects);
}

// Function to render the leaderboard in the table
function renderLeaderboard(data) {
    leaderboardBody.innerHTML = ''; // Clear existing data

    data.forEach((entry, index) => {
        const row = document.createElement('tr');

        // Create the badge icon if the student has all 16 badges
        const badgeIcon = entry.totalBadges >= 16 ? '🏅' : '';

        row.innerHTML = `
            <td>${index + 1}</td> <!-- Position number -->
            <td>${entry.name}</td>
            <td><a href="${entry.profileUrl}" target="_blank">View Badges</a></td> <!-- Updated text -->
            <td>${entry.skillBadges}</td>
            <td>${entry.arcadeGames}</td>
            <td>${entry.totalBadges}</td>
            <td>${badgeIcon}</td> <!-- Badge icon -->
        `;

        leaderboardBody.appendChild(row);
    });
}

// Initialize the leaderboard update
updateLeaderboard(prevData, todayData);
