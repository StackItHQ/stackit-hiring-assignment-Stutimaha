[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_IojtdoU)
# StackIt Hiring Assignment

### Welcome to StackIt's hiring assignment! 🚀

**If you didn't get here through github classroom, are you sure you're supposed to be here? 🤨**


We are glad to have you here, but before you read what you're going to beat your head over for the next few hours (maybe days?), let's get a few things straight:
- We really appreciate honesty. Don't copy anyone else's assignment, it'll only sabotage your chances :P
- You're free to use any stack, and library of your choice. Use whatever you can get your hands on, on the internet!
- We love out of the box solutions. We prefer to call it *Jugaad* 
- This might be just the first round, but carries the most importance of all. Give your best, and we hope you have a fun time solving this problem.

## ✨ **Problem Statement: Crafting a CSV Importer for Google Sheets** ✨

**Context**:
Data analysts around the world 🌍, handle massive amounts of data to derive meaningful insights for their organization 📊. Among the tools they use, Google Sheets 📈 stands out due to its ease of use, accessibility, and collaborative features. However, many analysts have identified a recurring pain point: the cumbersome process of importing CSV files into Google Sheets repeatedly.

A typical week of an analyst in an e-commerce company 🛒 involves receiving multiple CSV files 📁 containing sales, inventory, customer feedback, and more. The data from these files needs to be meticulously analyzed and presented in the company’s weekly meetings. However, instead of diving directly into analysis, most analysts need to spend an inordinate amount of time just importing and structuring these CSV files into Google Sheets ⏳. This repetitive, time-consuming task reduces the efficiency of these professionals and delays the extraction of crucial insights 😫.

**Today, you are going to make their lives better.**

**Problem Statement**:
Make a CSV Importer for Google Sheets that lets users drag and drop CSV files onto the Google Sheet. The moment they drop the CSV file, allow them to select which columns to import 🗂️.

You get brownie points 🍪 if you can make it even easier by allowing them to filter the data as well before importing it into Google Sheets 🔍.

**Other pointers**:
- Import to Sheet – After validation and mapping, devise a method to populate the data into a chosen Google Sheet, either appending to existing data or creating a new sheet 📥📋.
- Optimize for Large Files – Large datasets are common in analytics. Your solution should effectively handle large CSV files (~15MB CSV file) without causing performance issues or prolonged waiting times 📈📦.

## Submission ⏰
The timeline for this submission is: **9AM, 30th Sept, 2023 - 12PM, 2nd Oct, 2023**

Some things you might want to take care of:
- Make use of git and commit your steps!
- Use good coding practices.
- Write beautiful and readable code. Well-written code is nothing less than a work of art.
- Use semantic variable naming.
- Your code should be organized well in files and folders which is easy to figure out.
- If there is something happening in your code that is not very intuitive, add some comments.
- Add to this README at the bottom explaining your approach (brownie points 😋)

Make sure you finish the assignment a little earlier than this so you have time to make any final changes.

Once you're done, make sure you **record a video** showing your project working. The video should **NOT** be longer than 120 seconds. While you record the video, tell us about your biggest blocker, and how you overcame it! Don't be shy, talk us through, we'd love that.

We have a checklist at the bottom of this README file, which you should update as your progress with your assignment. It will help us evaluate your project.

- [X] My code's working just fine! 🥳
- [ ] I have recorded a video showing it working and embedded it in the README ▶️
- [X] I have tested all the normal working cases 😎
- [X] I have even solved some edge cases (brownie points) 💪
- [X] I added my very planned-out approach to the problem at the end of this README 📜

## Got Questions❓
Feel free to check the discussions tab, you might get something of help there. Check out that tab before reaching out to us. Also, did you know, the internet is a great place to explore 😛

## Developer's Section
*Add your video here, and your approach to the problem (optional). Leave some comments for us here if you want, we will be reading this :)*

### 🌟 Illuminating the Data Import Struggle
In the fast-paced world of data analysis, where data flows incessantly like a river, a recurring headache plagues our valiant data analysts - the tiresome chore of importing CSV files into the Google Sheets arena. 

**Imagine this:** a typical week for an analyst involves juggling multiple CSV files 📁 containing sales figures, inventory data, and customer feedback. 

**However**, instead of diving straight into the thrilling realm of data analysis, these professionals spend an inordinate amount of time wrestling with CSV import processes, delaying the extraction of crucial insights 😫.

### 🔮 The Vision: A Seamless Data Entry Oasis
Empathy for their struggle fueled my determination to make a change. The vision was crystal clear: a CSV Importer for Google Sheets that lets analysts simply drag and drop their CSV files onto the sheet 📄, and with a few clicks, choose the columns to import. 

But it wasn't just about import; I wanted to make it even more user-friendly by allowing them to filter the data before it even hits Google Sheets. Efficiency was the goal - save time on the mundane, focus on the meaningful.

### 💻 Unveiling the Wizardry: The Technical Magic
- Embarking on the technical side, I delved into Google Apps Script, creating a web app interface using HTMLService.
- The heart of the solution lies in the `importCSV` function, handling the import based on provided data.
- Parsing CSV using the PapaParse library 📦, the script dynamically generates checkboxes for column selection. 
- Filters, a crucial aspect, were implemented with various filter types like 'equals,' 'contains,' and more 🔍.

### 🚀 Results: From Frustration to Elation
As the code unfolded, so did the capabilities. Users could drag, drop, select columns, apply filters, and watch the magic unfold. The script seamlessly validated and mapped data, populating the Google Sheet efficiently. The interface was clean, and error handling robust - a CSV imported successfully message greeted users on success, while any hiccups were caught and communicated.

### 🌈 Future Improvements: Dreams in the Pipeline
The journey, though successful, left some stones unturned due to the ticking clock. 🕰️ Automatic detection of CSV delimiters, a feature that would add a layer of adaptability, was in the pipeline. I envisioned a transformational phase where users could not only import but also manipulate data on-the-fly – sorting, grouping, aggregating, and formatting. Saving import settings for future use and a progress indicator 📊 were on my wishlist, enhancing the tool's practicality. Alas, the constraints of time held these aspirations back, but the foundation is laid for future enhancements.

In essence, the CSV Importer for Google Sheets became a bridge between the arduous task of data import and the exciting realm of analysis 📈, with room for even more innovations in the chapters to come. 🌟

🌐 [Link to Project](https://script.google.com/macros/s/AKfycbwGt0sSNZqKHjUSnWmkPlry_kq1kcoaedywMHJCkPxdPJ6ZxUdIC-5d_r_kvSpHVB0p/exec)

📊 [Link to Results](https://docs.google.com/spreadsheets/d/1gqjOL1CGLoYUkA3Q9t9o3MVaJYLThuqavpF3vGASvCY/edit#gid=0)
