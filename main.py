# IMPORTANT - DO NOT RENAME COLUMN TITLES ON AIRTABLE ~ code will break!! 
import os
import requests
from dotenv import load_dotenv
load_dotenv(".env")

# All id/key/name info is in .env file, but just leaving it in here as comments
# AIRTABLE_BASE_ID= 'apph59FEIK9tFsbeP'
AIRTABLE_BASE_ID = os.environ.get("AIRTABLE_BASE_ID")

# AIRTABLE_API_KEY = 'keyMvIhftiZpciEpD'
AIRTABLE_API_KEY = os.environ.get("AIRTABLE_API_KEY")

# AIRTABLE_TABLE_NAME = 'table1'
AIRTABLE_TABLE_NAME = os.environ.get("AIRTABLE_TABLE_NAME")

# print(os.environ.get("AIRTABLE_API_KEY"))

endpoint= f'https://api.airtable.com/v0/{AIRTABLE_BASE_ID}/{AIRTABLE_TABLE_NAME}'

# trying to see if you can manually enter data - this setup works!
# python requests headers
# headers = {
#     "Authorization": f"Bearer {AIRTABLE_API_KEY}",
#     "Content-Type": "application/json"

# }

# data = {
#   "records": [
#     {
#       "fields": {
#         "Name": "test",
#         "Link": "test",
#         "Approx_Start_Date": "2021-06-01",
#         "Funding_Sources": "Government",
#         "Approx_End_Date": "2021-06-01",
#         "Funders": "test",
#         "End_Users": "test",
#         "Use_Case": "test",
#         "Death_Cause": "Funding",
#         "Post_Mortem": "Donated",
#         "Successor_Projects": [
#           "recmn3SCh7CRkAMy9"
#         ],
#         "Life_Proof": "test"
#       }
#     },
#     {
#       "fields": {
#         "Name": "test2",
#         "Link": "test2",
#         "Approx_Start_Date": "2021-06-02",
#         "Funding_Sources": "Donations",
#         "Approx_End_Date": "2021-06-02",
#         "Funders": "test2",
#         "End_Users": "test2",
#         "Use_Case": "test2",
#         "Death_Cause": "Adoption",
#         "Post_Mortem": "Closed",
#         "Successor_Projects": [
#           "recyBax45uBSEj0Z3"
#         ],
#         "Life_Proof": "test2"
#       }
#     }
#   ]
# }

# HTTP Methods
# "create" -> POST, "update" -> PATCH, "delete" -> DELETE

# r = requests.post(endpoint, json=data, headers=headers)
# print(r.json())

# print(r.status_code)
# if this results in 200, yay! if it's 401, there might be error with API Key
# look at HTTP status codes for more help

# Automating the process using a method - method doesn't work yet
def add_record(Name = None, Link = "", Approx_Start_Date = "", Approx_End_Date = "", Funding_Sources = "", Funders = "", End_Users = "", Use_Case = "", Death_Cause = "", Post_Mortem = "", Successor_Projects = "", Life_Proof = ""):
    if Name is None:
        return
    headers = {
        "Authorization": f"Bearer {AIRTABLE_API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
    "records": [
            {
            "fields": {
                "Name": name,
                "Link": link,
                "Approx_Start_Date": approx_start_date,
                "Funding_Sources": funding_sources,
                "Approx_End_Date": approx_end_date,
                "Funders": funders,
                "End_Users": end_users,
                "Use_Case": use_case,
                "Death_Cause": death_cause,
                "Post_Mortem": post_mortem,
                "Successor_Projects": successor_projects, 
                "Life_Proof": life_proof
                }
            } 
        ]
    }
    r = requests.post(endpoint, json=data, headers=headers)
    return r.status_code == 200 #checks to see if everything got added properly

# making it more user friendly :)
name = input("What is the name of the organization?\n")
link = input("Org's website link?\n")
approx_start_date = input("Org's approximate start date?\n")
funding_sources = input("Org's funding sources?\n")
approx_end_date = input("Org's approximate end date?\n")
funders = input("Org's funders?\n")
end_users = input("Org's end users?\n")
use_case = input("Org's use cases?\n")
death_cause = input("Org's death cause?\n")
post_mortem = input("Org's post mortem?\n")
successor_projects = input("Org's successor projects?\n")
life_proof = input("Org's life proof?\n")

# function call with hard-coded manual inputs (uncomment to test):
# add_record(Name = "blah", Link = "blah", Approx_Start_Date = "blah", Approx_End_Date = "blah", Funding_Sources = "blah", Funders = "blah", End_Users = "blah", Use_Case = "blah", Death_Cause = "blah", Post_Mortem = "blah", Successor_Projects = "blah", Life_Proof = "blah")

# something is wrong with this add_record method, Error: Line 93, NameError: name 'name' is not defined
# this has to be fixed, also data types have to be considered for some of the variables - not all are stings

# function call with user inputs (lines 113 - 124) (uncomment to test):
# add_record(Name = name, Link = link, Approx_Start_Date = approx_start_date, Approx_End_Date = approx_end_date, Funding_Sources = funding_sources, Funders = funders, End_Users = end_users, Use_Case = use_case, Death_Cause = death_cause, Post_Mortem = post_mortem, Successor_Projects = successor_projects, Life_Proof = life_proof)
# same issue here




  

        




