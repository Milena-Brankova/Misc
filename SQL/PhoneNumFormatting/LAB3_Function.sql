CREATE FUNCTION dbo.FormatPhoneNumber (@PhoneNumberToFormat varchar(16))
RETURNS VARCHAR(16)
AS
BEGIN
DECLARE @formatted varchar(16) = '';
DECLARE @len int = LEN(@PhoneNumberToFormat);
DECLARE @currentchar char(1);

/* return unformatted strings that start with '+' */
IF SUBSTRING(@PhoneNumberToFormat,1,1) = '+' 
   SET @formatted = @PhoneNumberToFormat;
ELSE
    BEGIN
/* remove symbols that are not digits */
    WHILE @len > 0
    BEGIN
	   SELECT @currentchar = SUBSTRING(@PhoneNumberToFormat, 1, 1);
	   IF @currentchar in ('0','1','2','3','4','5','6','7','8','9')
	       SET @formatted = @formatted + @currentchar;
	       SET @PhoneNumberToFormat = SUBSTRING(@PhoneNumberToFormat,2,@len-1);
	   SET @len = @len - 1;
	END;

    SET @len = LEN(@formatted);
    IF @len = 10 
	    SET @formatted = '('+ SUBSTRING(@formatted, 1,3) + ') ' 
                            + SUBSTRING(@formatted, 4,3) + '-'
				            + SUBSTRING(@formatted, 7,4);
    IF @len = 8
	    SET @formatted = SUBSTRING(@formatted, 1,4) + '-'
				  + SUBSTRING(@formatted, 5,4);
    IF @len = 7
	    SET @formatted = SUBSTRING(@formatted, 1,3) + '-'
				  + SUBSTRING(@formatted, 4,4);
    IF @len = 6
	    SET @formatted =  SUBSTRING(@formatted, 1,3) + '-'
				  + SUBSTRING(@formatted, 4,3);
    END;
	RETURN @formatted;
END;
GO