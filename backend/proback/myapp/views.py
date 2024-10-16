from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db import connection

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


#repository function
def execute_stored_procedure(proc_name, params=None, is_select=True):
    
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