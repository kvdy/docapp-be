PGPASSWORD='your_db_pass' psql -U your_db_user -d your_db_name -h your_db_host -c "
DO \$\$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM public.user_entity WHERE email = 'user_email') THEN
        INSERT INTO public.user_entity(
	id, created, updated, name, email, password, "grant")
	VALUES (gen_random_uuid(), NOW(), NOW(), "User Name", "user email", "user password", 0);
    END IF;
END \$\$;   
"



