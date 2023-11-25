# NDB-Project

# vite path alias 관련 설정

- https://chaika.hatenablog.com/entry/2022/05/14/083000

# eslint && pretiier 에러 발생시

```javascript
// ./.vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```