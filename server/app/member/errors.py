from rest_framework.exceptions import APIException


class MemberNotExistException(APIException):
    status_code = 404
    default_detail = "Member does not exist"
    default_code = "Not Found"
