# ShowCase

This is a personal project where I can see all the clothe that I have and select what is I gonna use today, this help to make a variation and don't use the same mix:

Inspiration for UI:

![](https://i.pinimg.com/originals/ae/1c/37/ae1c37954fdec00c28ab7bbe38fd74ad.gif)

![](https://i.pinimg.com/originals/d6/e4/8c/d6e48ca013f303cb083222dbcd20cc94.gif)

# Steps:
## UI
- [x] Mockup Idea
- [x] Think about flows for different kinds of clothes
- [ ] Pass project to typescript
- [ ] Search Icons
- [ ] Discover Navbar behavior
- [ ] Add navbar functionality
- [ ] Add routes
- [ ] Make services request
- [ ] Render images
- [ ] Hosting UI
- [ ] Add upload functionality


## Api
- [ ] Build a api mockup
- [ ] Study about how create an API
- [ ] Create a server
- [ ] Save data into BD
- [ ] Hosting Server


----
<img width="822" alt="Screen Shot 2022-10-10 at 11 10 00 AM" src="https://user-images.githubusercontent.com/37992878/194915381-0656bebf-0c6c-46bf-8497-f1f7bf346f64.png">


`GET` **/shirts**

To render carousel
```json
[
  {
    "img": "http/image.png",
    "id": "123AB",
    "used": 2,
    "category": "shirt",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  },
  {
    "img": "http/image1.png",
    "id": "123ABC",
    "used": 2,
    "category": "shirt",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  },
  {
    "img": "http/image2.png",
    "id": "123ABE",
    "used": 3,
    "category": "shirt",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  }
]
```




`POST` **/item_id**

Save outfit seleted

```json
{
  "img": "http/image.png",
  "id": "ABC123",
  "used": 2,
  "category": "shirt",
  "status": 2,
  "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
  "lastUsed": "2022-04-24"
},
```


`GET` **/date?<date>**

Get outfit per date
```json
[
  {
    "img": "http/image.png",
    "id": "AB1234",
    "used": 2,
    "category": "shirts",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  },
  {
    "img": "http/image.png",
    "id": "ABC1234",
    "used": 4,
    "category": "pants",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  },
  {
    "img": "http/image.png",
    "id": "ABC12",
    "used": 1,
    "category": "shoes",
    "status": 2,
    "date": ["2022-04-05", "2022-04-15", "2022-04-24"],
    "lastUsed": "2022-04-24"
  }
]
```

`GET` **/date?<item_id>**

Get date when an item was used
```json
{
  "id": "ABC12",
  "date": ["2022-04-05", "2022-04-15", "2022-04-24"]
}
```
