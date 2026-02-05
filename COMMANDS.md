# Kommandon

## Starta applikationen

```bash
cd /Users/jesper/claude/projects/shoppinglist
docker-compose up --build
```

## Stoppa applikationen

```bash
docker-compose down
```

## Starta utan att bygga om

```bash
docker-compose up
```

## Se loggar

```bash
# Alla tjänster
docker-compose logs -f

# Endast backend
docker-compose logs -f backend

# Endast frontend
docker-compose logs -f frontend

# Endast databas
docker-compose logs -f db
```

## Öppna i VS Code

```bash
code /Users/jesper/claude/projects/shoppinglist
```

## Öppna i webbläsaren

http://localhost:3000

## Testa API direkt

```bash
# Hämta alla items
curl http://localhost:8080/api/items

# Lägg till item
curl -X POST http://localhost:8080/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Mjölk"}'

# Ta bort item (ersätt 1 med rätt id)
curl -X DELETE http://localhost:8080/api/items/1

# Töm hela listan
curl -X DELETE http://localhost:8080/api/items
```

## Återställ allt (radera databas)

```bash
docker-compose down -v
docker-compose up --build
```
