SELECT CEIL(AVG(Salary) - AVG(TO_NUMBER(REPLACE(TO_CHAR(Salary),'0'))))
FROM EMPLOYEES;