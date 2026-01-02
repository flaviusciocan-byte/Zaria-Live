# Project Structure Fix Plan

## Issues Identified

### 1. **Nested Duplicate Folders** ❌
- **Location**: `Zaria-Live/Zaria-Live/` (920KB of duplicate files)
- **Issue**: Triple-nested folder structure with duplicate code
- **Impact**: Confusion, wasted space, potential import conflicts
- **Fix**: Delete entire `Zaria-Live/` folder (keep only root-level files)

### 2. **Root-Level `api/` Directory** ❌
- **Location**: `/api/zaria/orchestrator.js`
- **Issue**: Next.js API routes must be in `pages/api/`, not root `api/`
- **Impact**: Root `api/` folder is ignored by Next.js, causing confusion
- **Fix**: Delete `/api/` folder (orchestrator.js already exists in `pages/api/zaria/`)

### 3. **Malformed Filename** ❌
- **Location**: `pages    └── index.js` (filename with spaces and special chars)
- **Issue**: Invalid filename that could cause issues
- **Impact**: Potential file system issues, confusion
- **Fix**: Delete this file (duplicate of `pages/index.js`)

### 4. **Duplicate API Route File** ⚠️
- **Location**: `pages/api/zaria/agents` (no extension) and `pages/api/zaria/agents.js`
- **Issue**: Two files with same route - Next.js will use `agents.js`, `agents` is ignored
- **Impact**: Confusion, potential for wrong file being edited
- **Fix**: Delete `pages/api/zaria/agents` (keep only `agents.js`)

### 5. **Incorrect Component Content** ❌
- **Location**: `components/navigation/ZariaNav.js`
- **Issue**: File contains ZariaLayout code instead of navigation component code (circular import bug)
- **Impact**: Component won't work, causes runtime errors
- **Fix**: Create proper ZariaNav component with navigation links (all versions in project are broken)

### 6. **Different Orchestrator Files** ⚠️
- **Location**: `api/zaria/orchestrator.js` (root) vs `pages/api/zaria/orchestrator.js`
- **Issue**: Two versions exist, root one is ignored by Next.js
- **Impact**: Confusion about which file is actually used
- **Fix**: Will be resolved by deleting root `api/` folder

### 7. **Missing Standard Directories** ⚠️
- **Issue**: No `styles/` directory (optional but standard in Next.js)
- **Impact**: None - this is optional
- **Fix**: Create empty `styles/` directory for future use (optional)

---

## Proposed Changes

### DELETE Operations:

1. **Delete nested folder structure**
   ```
   DELETE: Zaria-Live/Zaria-Live/ (entire folder and all contents)
   ```

2. **Delete root-level api folder**
   ```
   DELETE: api/ (entire folder)
   ```

3. **Delete malformed file**
   ```
   DELETE: pages    └── index.js
   ```

4. **Delete duplicate agents file**
   ```
   DELETE: pages/api/zaria/agents (keep agents.js)
   ```

### CREATE/FIX Operations:

5. **Fix ZariaNav component**
   ```
   CREATE: components/navigation/ZariaNav.js
   Content: Simple navigation component with links to:
   - / (Home)
   - /ui/manifest (Manifest)
   - /ui/manifest/layers (Layers)
   - /ui/manifest/codex (Codex)
   - /ui/manifest/totality (Totality)
   ```

6. **Create styles directory** (optional, standard Next.js structure)
   ```
   CREATE: styles/ (empty directory)
   ```

### VERIFY Operations:

7. **Verify all imports still work**
   - Check: `pages/ui/manifest/*.js` import paths to `components/layouts/ZariaLayout`
   - All should use: `import ZariaLayout from "../../../components/layouts/ZariaLayout"`
   - This path will remain correct after cleanup

---

## Expected Final Structure

```
Zaria-Live/
├── components/
│   ├── layouts/
│   │   └── ZariaLayout.js
│   └── navigation/
│       └── ZariaNav.js (FIXED)
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── 404.js
│   ├── index.js
│   ├── api/
│   │   └── zaria/
│   │       └── [all API routes including agents.js]
│   └── ui/
│       └── manifest/
├── public/
│   └── README.txt
├── styles/ (NEW - optional)
├── next.config.js
├── package.json
└── README.md
```

---

## Import Paths Status

✅ **All current import paths are correct and will remain valid:**
- `pages/ui/manifest/*.js` → `../../../components/layouts/ZariaLayout` ✓
- `components/layouts/ZariaLayout.js` → `../navigation/ZariaNav` ✓

No import path updates needed after cleanup.

---

## Risks & Considerations

⚠️ **Before proceeding:**
1. Ensure no critical files exist only in `Zaria-Live/Zaria-Live/` that aren't in root
2. The root `api/orchestrator.js` differs from `pages/api/zaria/orchestrator.js` - keeping `pages/api/zaria/orchestrator.js` (it's the one actually used)
3. The `pages/api/zaria/agents` file has simpler content than `agents.js` - keeping `agents.js` (more complete)
4. All ZariaNav.js files are broken - will create minimal working navigation component

---

## Implementation Order

1. First: Analyze ZariaNav component - find correct version or create minimal working one
2. Second: Delete duplicate/malformed files and folders
3. Third: Create missing standard directories (if needed)
4. Fourth: Verify all imports and test build

