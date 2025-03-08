from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import connection
from django.shortcuts import render








@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def insertpatient(request):



    if request.method == 'POST':
        username = request.data.get("username")
        email = request.data.get("email")
        phone = request.data.get("phone")
        password = request.data.get("password")
        city = request.data.get("city")
        specialization = request.data.get("specialization")
        name = request.data.get("name")
        dob = request.data.get("date_of_birth")

        
    elif request.method == 'GET':
        username = request.Get.get("username")
        email = request.Get.get("email")
        phone = request.Get.get("phone")
        password = request.Get.get("password")
        city = request.Get.get("city")
        specialization = request.Get.get("specialization")
        name = request.Get.get("name")
        dob = request.Get.get("date_of_birth")


        
     


    print(f"Username: {username}")
    print(f"Email: {email}")
    print(f"Phone: {phone}")
    print(f"Password: {password}")
    print(f"City: {city}")
    print(f"Specialization: {specialization}")
    print(f"Name: {name}")
    print(f"Date of Birth: {dob}")
    proc_name="InsertUser"
    param = {
    "Username": username,
    "Email": email,
    "PhoneNo": phone,
    "Password": password,
    "Address": city,
    "IsActive":1,
    "Name": name,
    "DateOfBirth": dob,
    "show":1,
    "Specialization":""
    #"createdby":""
     }

    result=execute_stored_procedure(proc_name,param,False)
    print(result)
        # Call the stored procedure or query your database
    # proc_name = "InsertUser"
    # params = {
         
    #         "Username": username,
    #         "show":2
           
    # }

    # results = execute_stored_procedure(proc_name, params, True)
    #print(True)
    if True:
            return Response({"result":True}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
  # Unauthorized



@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def signupDoctor(request):



    if request.method == 'POST':
        username = request.data.get("username")
        email = request.data.get("email")
        phone = request.data.get("phone")
        password = request.data.get("password")
        city = request.data.get("city")
        specialization = request.data.get("specialization")
        name = request.data.get("name")
        dob = request.data.get("date_of_birth")

        
    elif request.method == 'GET':
        username = request.Get.get("username")
        email = request.Get.get("email")
        phone = request.Get.get("phone")
        password = request.Get.get("password")
        city = request.Get.get("city")
        specialization = request.Get.get("specialization")
        name = request.Get.get("name")
        dob = request.Get.get("date_of_birth")


        
     


    print(f"Username: {username}")
    print(f"Email: {email}")
    print(f"Phone: {phone}")
    print(f"Password: {password}")
    print(f"City: {city}")
    print(f"Specialization: {specialization}")
    print(f"Name: {name}")
    print(f"Date of Birth: {dob}")
    proc_name="InsertUser"
    param = {
    "Username": username,
    "Email": email,
    "PhoneNo": phone,
    "Password": password,
    "Address": city,
    "IsActive":1,
    "Name": name,
   # "experience": 2,
    "show":2,
    "Specialization":specialization
     }

    execute_stored_procedure(proc_name,param,False)
        # Call the stored procedure or query your database
    # proc_name = "InsertUser"
    # params = {
         
    #         "Username": username,
    #         "show":2
           
    # }

    # results = execute_stored_procedure(proc_name, params, True)
    #print(True)
    if True:
            return Response({"result":True}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
  # Unauthorized






@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getUser(request):
    if request.method == 'POST':
        username = request.data.get("username")
        password = request.data.get("password")
    elif request.method == 'GET':
        username = request.GET.get("username")
        password = request.GET.get("password")


    print(username)
    print(password)

        # Call the stored procedure or query your database
    proc_name = "GetUser"
    params = {
            "Username": username,
            "Password": password,
            "show":1    }

    results = execute_stored_procedure(proc_name, params, True)
    print(results)
    if results:
            return Response(results, status=200)  # Return user data if found
    else:
            return Response({"error": "Invalid username or password"}, status=401)  # Unauthorized


@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getPatient(request):
    if request.method == 'POST':
        pateintid = request.data.get("patientid")
       
    elif request.method == 'GET':
        pateintid = request.GET.get("patientid")
        


    print(pateintid)
    #print(password)

        # Call the stored procedure or query your database
    proc_name = "GetUser"
    params = {
           
            "patientid": pateintid,
            "show":3    }

    results = execute_stored_procedure(proc_name, params, True)
    print(results)
    if results:
            return Response(results, status=200)  # Return user data if found
    else:
            return Response({"error": "Invalid username or password"}, status=401)  # Unauthorized




@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getUser1(request):
    if request.method == 'POST':
        username = request.data.get("username")
        password = request.data.get("password")
    elif request.method == 'GET':
        username = request.GET.get("username")
        password = request.GET.get("password")


    print(username)
    print(password)

        # Call the stored procedure or query your database
    proc_name = "get1"
    params = {
               }

    results = execute_stored_procedure(proc_name, params, True)
    print(results)
    if results:
            return Response(results, status=200)  # Return user data if found
    else:
            return Response({"error": "Invalid username or password"}, status=401)  # Unauthorized

DAY_MAPPING = {
    "Monday": 1, "Tuesday": 2, "Wednesday": 3, "Thursday": 4,
    "Friday": 5, "Saturday": 6, "Sunday": 7,
}

@api_view(['POST'])
def insetschedule(request):
    try:
        # Extract data from request
        doctor_id = request.data.get("doctorid")
        day_name = request.data.get("day")
        start_time = request.data.get("startTime")
        end_time = request.data.get("endTime")
        is_available = request.data.get("isAvailable", True)

        # Validate required fields
        if not all([doctor_id, day_name, start_time, end_time]):
            return Response({"error": "doctorid, day, startTime, and endTime are required"}, status=400)

        # Convert day name to integer (1-7)
        day_of_week = DAY_MAPPING.get(day_name.capitalize())
        if day_of_week is None:
            return Response({"error": "Invalid day name"}, status=400)

        # Define stored procedure parameters
        proc_name = "ManageAvailableSlots"
        params = {
            "Show": 1,
            "DayOfWeek": day_of_week,
            "ModifiedBy": doctor_id,
            "IsActive": is_available,
            "StartTime": start_time,
            "EndTime": end_time,
            "DoctorId": doctor_id,
        }

        # Call stored procedure
        result = execute_stored_procedure(proc_name, params, is_select=False)
        
        return Response(result, status=201)

    except Exception as e:
        print("Error inserting schedule:", e)
        return Response({"error": str(e)}, status=400)
#repository function
def execute_stored_procedure(proc_name, params=None, is_select=True):
    """
    The function `execute_stored_procedure` executes a stored procedure with optional parameters and
    returns the results if it is a SELECT statement.
    
    :param proc_name: The `proc_name` parameter in the `execute_stored_procedure` function is the name
    of the stored procedure that you want to execute in your database. It is a required parameter and
    should be a string representing the name of the stored procedure
    :param params: The `params` parameter in the `execute_stored_procedure` function is a dictionary
    that contains the input parameters for the stored procedure being executed. Each key-value pair in
    the dictionary represents a parameter name and its corresponding value that will be passed to the
    stored procedure
    :param is_select: The `is_select` parameter in the `execute_stored_procedure` function is a boolean
    parameter that determines whether the stored procedure being executed is a SELECT query or not. If
    `is_select` is set to `True`, the function will execute the stored procedure as a SELECT query and
    return the, defaults to True (optional)
    :return: If the `is_select` parameter is `True`, the function will return a list of dictionaries
    where each dictionary represents a row of the result set from executing the stored procedure. If the
    `is_select` parameter is `False`, the function will return a dictionary with a "status" key
    indicating success and a "message" key with a success message.
    """
    
    with connection.cursor() as cursor:
        if params is None:
            params = {}

        
        param_str = ', '.join([f"@{k}='{v}'" if isinstance(v, str) else f"@{k}={v}" for k, v in params.items()])
        sql_call = f"EXEC {proc_name} {param_str}"

        
        if is_select:
            cursor.execute(sql_call)
            rows = cursor.fetchall()
            col_names = [desc[0] for desc in cursor.description]

            
            results = [dict(zip(col_names, row)) for row in rows]
            return results
        else:
            cursor.execute(sql_call)
            return {"status": "Success", "message": f"Procedure '{proc_name}' executed successfully."}


  
@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getUsername(request):



    if request.method == 'POST':
        username = request.data.get("username")
        
    elif request.method == 'GET':
        username = request.GET.get("username")
     


    print(username)
  

        # Call the stored procedure or query your database
    proc_name = "GetUser"
    params = {
         
            "Username": username,
            "show":2
           
    }

    results = execute_stored_procedure(proc_name, params, True)
    print(results)
    if results:
            return Response({"result":True}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
  # Unauthorized





from .utils import predict_disease
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json 
@csrf_exempt
@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def predict(request):



    if request.method == 'POST':
        symptoms = request.data.get("symptoms")
        
    elif request.method == 'GET':
        symptoms = request.GET.get("symptoms")
     


    print(symptoms)
  
    predicted_diseases = predict_disease([symptoms])
    
        # Call the stored procedure or query your database
   
    print(predicted_diseases)
    if predicted_diseases:
            return Response({"result":predicted_diseases}, status=200)  # Return user data if found
    else:
            return Response({"result":predicted_diseases}, status=200)  # Return user data if found
  # Unauthorized


# @api_view(['GET'])
# def get_user_api(request):
#     username = request.GET.get('username')  # Extract 'username' from query params
    
    
#     if not username:
#         return Response({"error": "Username is required."}, status=400)
    
#     proc_name = "GetUser"
#     params = {
#         "Username": username,
#         "show": 2,  # Fetch by username
#     }
    
#     # Execute the stored procedure
#     with connection.cursor() as cursor:
#         param_str = ', '.join([f"@{k}='{v}'" for k, v in params.items()])
#         cursor.execute(f"EXEC {proc_name} {param_str}")
#         rows = cursor.fetchall()
#         col_names = [desc[0] for desc in cursor.description]
    
#     # Process results
#     results = [dict(zip(col_names, row)) for row in rows]
#     print("agya maal",results)
   
#     if results:
        
#         return Response(results, status=200)
#     else:
#         return Response({"message": "No user found."}, status=404)

# # Regular Django View: Render HTML page with user details
# from django.shortcuts import render

# def display_user(request):
#     return render(request, 'display_user.html')

@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getDoctor(request):
     if request.method=='GET':
          proc_name="GetDoctor"
          params = {
         
            #"Username": username,
            "show":1
           
             }

          results = execute_stored_procedure(proc_name,params)
          print("haram",results)
          if results:
                return Response({"result":results}, status=200)  # Return user data if found
          else:
                return Response({"result":False}, status=200)  # Return user data if found
            
@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getDoctorfordesease(request):
    if request.method=='POST':
          searchquerry = request.data.get("searchquerry")
    elif request.method == 'GET':
          searchquerry = request.GET.get("searchquerry")     
    print(searchquerry)
    proc_name="GetDoctor"
    params = {
         
            "searchquerry": searchquerry,
            "show":2,
           
             }

    results = execute_stored_procedure(proc_name,params,True)
    print("haram",results)
    if results:
        return Response({"result":results}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
            
@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getbloodpressure(request):
    if request.method=='POST':
          patientid = request.data.get("patientid")
    elif request.method == 'GET':
          patientid = request.GET.get("patientid")     
    print(patientid)
    proc_name="GetReadings"
    params = {
         
            "PatientID":patientid ,
            "show":1,
           
             }

    results = execute_stored_procedure(proc_name,params,True)
    print("haram",results)
    if results:
        return Response({"result":results}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
            
@api_view(['GET', 'POST'])  # Allow both GET and POST methods
def getbloodsugar(request):
    if request.method=='POST':
          patientid = request.data.get("patientid")
    elif request.method == 'GET':
          patientid = request.GET.get("patientid")     
    print(patientid)
    proc_name="GetReadings"
    params = {
         
            "PatientID":patientid ,
            "show":2,
           
             }

    results = execute_stored_procedure(proc_name,params,True)
    print("haram",results)
    if results:
        return Response({"result":results}, status=200)  # Return user data if found
    else:
            return Response({"result":False}, status=200)  # Return user data if found
            
@api_view(['GET', 'POST'])
def getDoctorbyId(request, id):  # Make sure id is passed here
    if request.method == 'GET':
        
        doctor_id = id  # Use the captured id
        
        params = {
            "id": doctor_id
        }

        proc_name = "getDoctorbyId"
        results = execute_stored_procedure(proc_name, params)
        if results:
            return Response({"result": results}, status=200)  # Return data if found
        else:
            return Response({"result": False}, status=404)  # Doctor not found
